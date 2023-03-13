import { Input, Select, Radio } from 'antd'
import { IFormSchema, INormalItem, ISchemaItem } from './type'
import OptionInput from './components/optionInput/index';
import useExpressionInput from './components/useExpressionInput';
import SchemaSwitch from './components/antdSchema/SchemaSwitch';
import RequiredInput from './components/requiredInput';


// 可以搞一个HOC来封装一下，处理Expression
export const componetMap = {
  Input,
  'Input.Password': Input.Password,
  // 'Input.Search': Input.Search,
  'Input.TextArea': Input.TextArea,
  Select,
  Radio: Radio.Group,
  OptionInput,
  Switch: SchemaSwitch,
  'Edit.Input': useExpressionInput(Input),
  'Edit.Input.Password': useExpressionInput(Input.Password),
  'Edit.Input.TextArea': useExpressionInput(Input.TextArea),
  'Edit.Switch': useExpressionInput(SchemaSwitch),
  RequiredInput,
}

export type TComponentType = 'Input' | 'Select' | 'Radio' | undefined

export const useAntdComponent = (content: Array<ISchemaItem>): Array<ISchemaItem> =>
  content?.map(item => ({
    ...item,
    renderComponent: componetMap[item.component],
  }))

export const useAntdComponentByFormSchema = (schema: IFormSchema) => {
  // if (schema)
  const newSchema: IFormSchema = {
    ...schema,
    content: useAntdComponent(schema.content) || [],
  }
  return newSchema
}
