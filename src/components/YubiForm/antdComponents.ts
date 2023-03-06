import { Input, Select, Radio } from 'antd'
import { IFormSchema, ISchemaItem } from './type'
import OptionInput from './components/optionInput';

// 可以搞一个HOC来封装一下，处理Expression
export const componetMap = {
  Input,
  'Input.Password': Input.Password,
  'Input.Search': Input.Search,
  'Input.TextArea': Input.TextArea,
  Select,
  Radio: Radio.Group,
  OptionInput,
}

export type TComponentType = 'Input' | 'Select' | 'Radio' | undefined

export const getAntdComponent = (
  componentName: string,
  deriveComponentName: string | undefined,
) => {
  if (deriveComponentName) {
    return componetMap[deriveComponentName]
  }
  return componetMap[componentName]
}

export const useAntdComponent = (content: ISchemaItem[]): ISchemaItem[] =>
  content?.map(item => ({
    ...item,
    renderComponent: getAntdComponent(item.component, item.deriveComponent),
  }))

export const useAntdComponentByFormSchema = (schema: IFormSchema) => {
  // if (schema)
  const newSchema: IFormSchema = {
    config: schema?.config,
    content: useAntdComponent(schema.content) || [],
  }
  return newSchema
}
