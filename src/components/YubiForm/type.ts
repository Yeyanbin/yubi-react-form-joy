
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

export interface IFormItem {
  prop: string
  component: string;
  // deriveComponent?: string | any | undefined
  renderComponent?: any
  // options?: IOption[] // 对options类组件进行额外处理和封装
  label: string | IExpression<string>
  innerHtml?: string
  attr?: any;
  hidden?: boolean | IExpression<boolean>;
  style?: {
    [key: string]: any
  }
  rules?: any[]
  // [key: string]: any | IExpression<ValueType>;
}

export interface INormalItem {
  component: string;
  innerHtml: string;
  attr?: any;
}


export type ISchemaItem = INormalItem | IFormItem;

export interface IFormConfig {
  name: string
  key: string
  attr?: any
  hidden?: boolean | IExpression<boolean>;
}

export interface IFormSchema {
  config: IFormConfig
  content: Array<INormalItem | IFormItem>;
  defaultState?: any;
}

export interface IBaseContentItemProps {
  value: any;
  onChange: (value: any) => void;
  [attrName: string]: any;
}