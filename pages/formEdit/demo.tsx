/* eslint-disable no-console */
// hellworld.tsx 可复制到项目中尝试创建页面
import React, { useEffect, useState } from 'react'
import YubiForm from 'src/components/YubiForm'
import { ISchemaItem } from 'src/components/YubiForm/type'

import editFormDemoStyles from 'src/styles/editFormDemo.module.scss'
import JsonEditor from 'pagesComponents/editForm/demo/jsonEditor'
import { useAntdComponent } from 'src/components/YubiForm/antdComponents'

interface IProps {
  name: string
  formContent: ISchemaItem[]
}

const helloworldPage = (props: IProps) => {
  const onChange = formValue => {
    // console.log('change formValue', formValue)
    setFormValue(formValue)
  }

  const [originFormContent, setOriginFormContent] = useState(props.formContent)
  const [formContent, setFormContent] = useState<ISchemaItem[]>(useAntdComponent(originFormContent))
  const [formValue, setFormValue] = useState({})

  useEffect(() => {
    console.log('originFormContent', originFormContent)
    setFormContent(useAntdComponent(originFormContent))
    console.log('formContent', formContent)
  }, [originFormContent])

  return (
    <div className={editFormDemoStyles.container}>
      <JsonEditor
        className={editFormDemoStyles.container_jsonSchema}
        content={props.formContent}
        change={setOriginFormContent}
      />
      <div>
        <YubiForm
          style={{
            width: '400px',
          }}
          content={formContent}
          change={onChange}
        />
        <span style={{ width: '400px' }}>{JSON.stringify(formValue)}</span>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  // const { name } = await getUserInfo();
  console.log('getStaticProps')
  return {
    props: {
      name: 'yubi',
      formContent: defaultFormContent,
    },
  }
}

const defaultFormContent = [
  {
    component: 'Input',
    deriveComponent: 'Input',
    label: '登陆',
    prop: 'user',
    attr: {
      placeholder: '请输入你的账号',
    },
  },
  {
    component: 'Input',
    deriveComponent: 'Input.Password',
    label: '密码',
    prop: 'password',
  },
  {
    component: 'Input',
    deriveComponent: 'Input.TextArea',
    label: '备注',
    prop: 'remark',
    attr: {
      placeholder: {
        expression: '{This is your name: } + {user}',
      },
    },
  },
  {
    component: 'Select',
    label: '选择器测试',
    prop: 'name',
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ],
  },
  {
    label: '水果',
    component: 'Radio',
    prop: 'frust',
    options: [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: true },
    ],
  },
  {
    label: '选项测试',
    component: 'OptionInput',
    prop: 'optionChoose',
  }
]

export default helloworldPage
