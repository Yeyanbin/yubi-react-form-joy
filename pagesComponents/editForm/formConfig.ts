import {
  TComponentType,
  useAntdComponentByFormSchema,
} from 'src/components/YubiForm/antdComponents'
import { IFormSchema } from 'src/components/YubiForm/type'

export const schemaForm: IFormSchema = {
  config: {
    name: '表单属性',
    key: 'schemaAttrSchema'
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
    key: 'schemaContentSchema'
  },
  content: [
    {
      prop: 'component',
      component: 'Select',
      label: '选择表单组件',
      options: [
        { value: 'Input', label: '输入框' },
        { value: 'Input.Password', label: '密码输入框' },
        // { value: 'Input.Search', label: '搜索框' },
        { value: 'Input.TextArea', label: '文本输入框' },
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
    {
      prop: 'hidden',
      component: 'Edit.Switch',
      label: '是否隐藏'
    }
  ],
}

export const schemaInputForm: IFormSchema = {
  config: {
    name: '输入框的表单',
    key: 'inputAttrSchema'
  },
  content: [
    {
      prop: 'attr.placeholder',
      component: 'Edit.Input',
      label: 'placeholder',
      attr: {
        placeholder: '请输入该输入框的介绍文本',
      },
    },
  ],
  defaultState: {
    attr: {
      placeholder: ''
    },
  }
}

export const schemaSelectForm: IFormSchema = {
  config: {
    name: '选择器表单',
    key: 'selectAttrSchema'
  },
  content: [
    {
      component: 'OptionInput',
      prop: 'options',
      label: '选项',
      attr: {
        useDisabled: true,
      }
    }
  ]
};

export const schemaSwitch: IFormSchema = {
  config: {
    name: '开关表单',
    key: 'switchAttrSchema',
  },
  content: [
    // {
    //   component
    // }
  ]
}

export const schemaRadioForm: IFormSchema = {
  config: {
    name: '单选表单',
    key: 'radioAttrSchema'
  },
  content: [
    {
      component: 'OptionInput',
      prop: 'options',
      label: '选项',
      attr: {
        useDisabled: true,
      }
    }
  ]
};


export const schemaInputDefaultValue = {
  // prop: ''
}

const ANTD_COMPONENT_SCHEMA_MAP = {
  Input: schemaInputForm,
  Select: schemaSelectForm,
  Radio: schemaRadioForm,
  'Input.Password': schemaInputForm,
  'Input.TextArea': schemaInputForm,
};

export const getAntdComponentSchema = (componentType: TComponentType) =>
  componentType
    ? useAntdComponentByFormSchema(ANTD_COMPONENT_SCHEMA_MAP[componentType] ?? {})
    : undefined
