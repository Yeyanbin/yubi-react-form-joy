import {
  TComponentType,
  useAntdComponent,
  useAntdComponentByFormSchema,
} from 'src/components/YubiForm/antdComponents'
import { IFormSchema } from 'src/components/YubiForm/type'

export const schemaForm: IFormSchema = {
  config: {
    name: '表单属性',
  },
  content: [
    {
      component: 'Input',
      prop: 'name',
      label: '名称',
      attr: {
        placeholder: '请输入该表单的名称',
      },
    },
  ],
}

export const schemaItemBaseForm: IFormSchema = {
  config: {
    name: '表单项的基础属性表单',
  },
  content: [
    {
      prop: 'component',
      component: 'Select',
      label: '选择表单组件',
      options: [
        { value: 'Input', label: '输入框' },
        { value: 'Select', label: '选择框' },
        { value: 'Radio', label: '单选' },
      ],
      rules: [{ required: true }],
    },
    {
      prop: 'prop',
      component: 'Input',
      label: '字段',
      attr: {
        placeholder: '请输入该表单项的字段',
      },
      rules: [{ required: true }],
    },
    {
      prop: 'label',
      component: 'Input',
      label: '标签',
      attr: {
        placeholder: '请输入该表单项的标签文本',
      },
      rules: [{ required: true }],
    },
  ],
}

export const schemaInputForm: IFormSchema = {
  config: {
    name: '输入框的表单',
  },
  content: [
    {
      prop: 'deriveComponent',
      component: 'Select',
      label: '选择派生组件',
      options: [
        { value: 'Input', label: '输入框' },
        { value: 'Input.Password', label: '密码输入框' },
        { value: 'Input.TextArea', label: '文本输入框' },
      ],
    },
    {
      prop: 'attr.placeholder',
      component: 'Input',
      label: 'placeholder',
      attr: {
        placeholder: '请输入该输入框的介绍文本',
      },
    },
  ],
}

export const schemaInputDefaultValue = {
  // prop: ''
}

const ANTD_COMPONENT_SCHEMA_MAP = {
  Input: schemaInputForm,
}

export const getAntdComponentSchema = (componentType: TComponentType) =>
  componentType
    ? useAntdComponentByFormSchema(ANTD_COMPONENT_SCHEMA_MAP[componentType] ?? {})
    : undefined
