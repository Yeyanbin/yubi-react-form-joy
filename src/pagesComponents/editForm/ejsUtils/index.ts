
import { IFormSchema, ISchemaItem } from 'src/components/YubiSchema/type';
import { getValueStr, renderFormItem, renderNormalItem } from './template/formItem';

const defaultFormItemName = 'FormItem';

let varRecord: { key: string, value: string }[];

const setAttrStr = (attr: any, prop: string) => {
  if (!attr) return ''
  const attrList: string[] = [];
  Object.keys(attr).forEach((key) => {
    switch(typeof attr[key]) {
      case 'boolean':
        attrList.push(`${key}={${attr[key] ? 'true' : 'false'}}`);
        break;
      case 'object':
        varRecord.push({
          key: `${prop}_${key}`,
          value: getValueStr(attr[key]),
        })
        attrList.push(`${key}={${prop}_${key}}`);
        break;
      case 'string':
        attrList.push(`${key}='${attr[key]}'`);
        break;
      case 'number':
        attrList.push(`${key}={${attr[key]}}`);
        break;
      default: 
        break;
    }
  });
  return attrList.join(' ');
};

export const transSchemaItem = (schemaItem: ISchemaItem) => {
  if (schemaItem.prop) {
    if (schemaItem.rules) {
      varRecord.push({
        key: `${schemaItem.prop}_rules`,
        value: getValueStr(schemaItem.rules),
      })
    }
    return renderFormItem({
      formItemName: defaultFormItemName,
      innerHtml: schemaItem.innerHtml,
      component: schemaItem.component,
      prop: schemaItem.prop,
      label: (schemaItem.label as string),
      formItemAttr: setAttrStr({
        hidden: schemaItem.hidden,
      }, schemaItem.prop),
      attrStr: setAttrStr(schemaItem.attr, schemaItem.prop),
      needRules: !!schemaItem.rules 
    }, 3);
  } 

  // default
  // const data = schemaItem
  return renderNormalItem({
    innerHtml: schemaItem.innerHtml,
    component: schemaItem.component,
    attrStr: setAttrStr(schemaItem.attr, schemaItem.prop),
  }, 3);
};

export const transFormSchema = (formSchema: IFormSchema) => {
  const {
    content,
  } = formSchema;
  // init varRecord
  varRecord = [];

  const str = content.map((contentItem) => transSchemaItem(contentItem));
  console.log('transFormSchema', 'content', str, 'varRecord', varRecord)
  const formStr = str.join(`
`);
  const varStr = varRecord.map(({key, value}) => `  const ${key} =${value}`).join(`
`);
  return `// 此模版为自动生成
const App = () => {
${varStr}

  return (
    <>
      <h1>模板表单</h1>
      <Form>
${formStr}
      </Form>
    </>
  )
}

`;
}
