type ValueType = string | number | boolean | any[]

interface IExpression<T extends ValueType> {
  expression: string
  value?: T
}

interface IOption {
  label: string
  value: string
  [key: string]: any
}

export interface ISchemaItem {
  label?: string | IExpression<string>
  innerHtml?: string
  prop: string
  component: string | any
  // deriveComponent?: string | any | undefined
  renderComponent?: any
  options?: IOption[] // 对options类组件进行额外处理和封装
  attr?: any;
  hidden?: boolean;
  style?: {
    [key: string]: any
  }
  rules?: any[]
  // [key: string]: any | IExpression<ValueType>;
}

export interface IFormConfig {
  name: string
  key: string
  attr?: any
}

export interface IFormSchema {
  config?: IFormConfig
  content: ISchemaItem[]
  defaultState?: any;
}

export interface IBaseContentItemProps {
  value: any;
  onChange: (value: any) => void;
  [attrName: string]: any;
}