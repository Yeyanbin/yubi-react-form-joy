
interface IRenderFormItemProps {
  formItemName: string;
  prop: string;
  component: string;
  label: string;
  innerHtml?: string;
  formItemAttr?: string;
  attrStr?: string;
  needRules?: boolean;
}

const prefixTabStr = '  ';
const prefixLevelMap: string[] = [];
(function() {
  let index = 0;
  let str = prefixTabStr;
  while(index <= 100) {
    prefixLevelMap.push(str)
    index += 1;
    str = `${str}${prefixTabStr}`;
  }
}())


const getPrefix = (level: number) => prefixLevelMap[level];

export const renderFormItem = ({
  innerHtml,
  formItemAttr,
  attrStr,
  formItemName,
  prop,
  component,
  label,
  needRules,
}: IRenderFormItemProps,
depth = 0) => `${getPrefix(depth)}<${formItemName} prop='${prop}' label='${label}'${formItemAttr ?? ` ${formItemAttr}`}${needRules ? ` rules={${`${prop}_rules`}}` : ''}>
${getPrefix(depth+1)}<${component}${attrStr ? ` ${attrStr}` : ''}>${innerHtml ? `
${getPrefix(depth+2)}${innerHtml}` : ''}
${getPrefix(depth+1)}</${component}>
${getPrefix(depth)}</${formItemName}>`

const renderValue = (item, level) => {
  switch (typeof item) {
    case 'boolean':
      return item ? 'true' : 'false'
    case 'number':
      return `${item}`;
    case 'string': 
      return `'${item}'`
    case 'object': 
      return `${getValueStr(item, level+1)}`;
    default:
      return 'undefined'
  }  
}

export const getValueStr = (value: any, level = 0): string => {
  console.log('getValueStr', value);
  if (Array.isArray(value)) {
    const strs = value.map((item) => renderValue(item, level))
    return ` [${strs.join(', ')}]`
  } 

  const keys = Object.keys(value).map((key) => 
    `${key}: ${renderValue(value[key], level)}`
  );

  return `{ ${keys.join(`, `)} }`
}


export const renderNormalItem = ({
  innerHtml,
  component,
  attrStr
}, depth = 0) => `${getPrefix(depth)}<${component}${attrStr ? ` ${attrStr}` : ''}>${innerHtml ? `
${getPrefix(depth+1)}${innerHtml}` : ''}
${getPrefix(depth)}</${component}>`