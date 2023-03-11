import { Input, Select, Radio } from 'antd'
import { IFormSchema, ISchemaItem } from './type'
import OptionInput from './components/optionInput/index';
import useExpressionInput from './components/useExpressionInput';
import SchemaSwitch from './components/antdSchema/SchemaSwitch';


// 可以搞一个HOC来封装一下，处理Expression
export const componetMap = {
  Input,
  'Input.Password': Input.Password,
  // 'Input.Search': Input.Search,
  'Input.TextArea': Input.TextArea,
  Select,
  Radio: Radio.Group,
  OptionInput,
  SchemaSwitch,
  'Edit.Input': useExpressionInput(Input),
  'Edit.Input.Password': useExpressionInput(Input.Password),
  'Edit.Input.TextArea': useExpressionInput(Input.TextArea),
  'Edit.Switch': useExpressionInput(SchemaSwitch),
}

export type TComponentType = 'Input' | 'Select' | 'Radio' | undefined

export const useAntdComponent = (content: ISchemaItem[]): ISchemaItem[] =>
  content?.map(item => ({
    ...item,
    renderComponent: componetMap[item.component],
  }))

export const useAntdComponentByFormSchema = (schema: IFormSchema) => {
  // if (schema)
  const newSchema: IFormSchema = {
    config: schema?.config,
    content: useAntdComponent(schema.content) || [],
  }
  return newSchema
}
