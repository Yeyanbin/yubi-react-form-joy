import {
  TComponentType,
  useAntdComponentByFormSchema,
} from 'src/components/YubiForm/antdComponents'
import { IFormSchema } from 'src/components/YubiForm/type'

export const schemaFormConfig: IFormSchema = {
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
    {
      component: 'Input',
      prop: 'key',
      label: 'key',
      attr: {
        placeholder: '请输入该表单的key值',
      },
    },
    {
      prop: 'colon',
      component: 'Switch',
      label: '是否显示冒号',
      attr: {
        defaultChecked: true,
      }
    },
  ],
}

export const schemaItemNormalForm: IFormSchema = {
  config: {
    name: '普通标签的表单',
    key: 'schemaContentNormal',
  },
  content: [
    {
      prop: 'component',
      component: 'Select',
      label: '选择标签',
      attr: {
        options: [
          { value: 'p', label: '文本' },
          { value: 'h1', label: '大号标题h1' },
          { value: 'h2', label: '次大号标题h2' },
          { value: 'h3', label: '中号标题h3' },
          { value: 'h4', label: '小号标题h4' }
        ],
      },
      rules: [{ required: true }],
    },
    {
      prop: 'innerHtml',
      component: 'Input',
      label: '内容',
      attr: {
        placeholder: '请输入内容',
      },
      rules: [{ required: true }],
    },
  ]
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
      attr: {
        options: [
          { value: 'Input', label: '输入框' },
          { value: 'Input.Password', label: '密码输入框' },
          // { value: 'Input.Search', label: '搜索框' },
          { value: 'Input.TextArea', label: '文本输入框' },
          { value: 'Select', label: '选择框' },
          { value: 'Radio', label: '单选' },
          { value: 'Switch', label: '开关' }
        ],
      },
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
    // {
    //   prop: 'labelAlign',
    //   component: 'Select',
    //   label: '标签文本对齐方式',
    //   options: [
    //     { value: 'left', label: '左' },
    //     { value: 'right', label: '右' },
    //   ],
    //   attr: {
    //     defaultValue: 'right'
    //   },
    // },
    {
      prop: 'hidden',
      component: 'Edit.Switch',
      label: '是否隐藏'
    },
    {
      prop: 'rules',
      component: 'RequiredInput',
      label: '是否必填'
    },
    {
      prop: 'extra',
      component: 'Edit.Input',
      label: '提示'
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
      prop: 'placeholder',
      component: 'Edit.Input',
      label: 'placeholder',
      attr: {
        placeholder: '请输入该输入框的介绍文本',
      },
    },
    {
      prop: 'bordered',
      component: 'Switch',
      label: '是否有边框',
    },
    {
      prop: 'size',
      component: 'Select',
      label: '大小',
      attr: {
        options: [
          { value: 'large', label: '大' },
          { value: 'middle', label: '中' },
          { value: 'small', label: '小' }
        ],
      }
    }
  ],
  defaultState: {
    placeholder: '',
    size: 'middle',
    bordered: true
  }
}

export const schemaTextareaForm: IFormSchema = {
  config: {
    name: '文本输入框的表单',
    key: 'inputAttrSchema'
  },
  content: [
    {
      prop: 'placeholder',
      component: 'Edit.Input',
      label: 'placeholder',
      attr: {
        placeholder: '请输入该输入框的介绍文本',
      },
    },
    {
      prop: 'bordered',
      component: 'Switch',
      label: '是否有边框',
    },
    {
      prop: 'rows',
      component: 'Input',
      label: '行数',
      attr: {
        placeholder: '请输入该输入框的行数',
      },
    },
    {
      prop: 'showCount',
      component: 'Switch',
      label: '是否展示字数',
    },
    {
      prop: 'maxLength',
      component: 'Input',
      label: '最大长度',
      hidden: {
        expression: '{showCount}=0'
      }
    },
    {
      prop: 'size',
      component: 'Select',
      label: '大小',
      attr: {
        options: [
          { value: 'large', label: '大' },
          { value: 'middle', label: '中' },
          { value: 'small', label: '小' }
        ],
      }
    }
  ],
  defaultState: {
    placeholder: '',
    size: 'middle',
    bordered: true,
    showCount: false
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


const schemaSwitchForm: IFormSchema = {
  config: {
    key: 'switch-key',
    name: '开关属性的表单'
  },
  content: [
    {
      component: 'Edit.Input',
      prop: 'checkedChildren',
      label: '被选中的内容'
    },
    {
      prop: 'unCheckedChildren',
      component: 'Edit.Input',
      label: '未被选中的内容'
    },
    {
      component: 'Edit.Switch',
      prop: 'defaultChecked',
      label: '默认是否选中',
    },
    {
      component: 'Edit.Switch',
      prop: 'disabled',
      label: '是否禁用'
    }

  ]
}

export const schemaInputDefaultValue = {
  // prop: ''
}

const ANTD_COMPONENT_SCHEMA_MAP = {
  Input: schemaInputForm,
  Select: schemaSelectForm,
  Radio: schemaRadioForm,
  'Input.Password': schemaInputForm,
  'Input.TextArea': schemaTextareaForm,
  Switch: schemaSwitchForm,
};

export const getAntdComponentSchema = (componentType: TComponentType | string) =>
  componentType
    ? useAntdComponentByFormSchema(ANTD_COMPONENT_SCHEMA_MAP[componentType] ?? {})
    : undefined
