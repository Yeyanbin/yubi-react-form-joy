import EditBoard from 'pagesComponents/editForm/editBoard'
import React, { FC, useEffect, useRef, useState } from 'react'
import { ISchemaItem, IFormConfig, IFormSchema } from 'src/components/YubiForm/type'
import { TComponentType, useAntdComponent } from 'src/components/YubiForm/antdComponents'
import editFormStyles from 'src/styles/editForm.module.scss'
import { Card, Button } from 'antd'
import YubiForm from 'src/components/YubiForm'
import {
  getAntdComponentSchema,
  schemaForm,
  schemaItemBaseForm,
} from 'pagesComponents/editForm/formConfig'

interface IProps {
  formContent: ISchemaItem[]
  formConfig: IFormConfig
}

interface INowModify {
  contentItem: ISchemaItem
  index: number
}

const FormEdit: FC<IProps> = ({ formConfig, formContent }) => {
  // console.log('FormEdit', formContent);
  const [renderContent, setRenderContent] = useState(useAntdComponent(formContent))
  const [nowModify, setNowModify] = useState<INowModify>()
  const [nowComponentType, setNowComponentType] = useState<TComponentType>(
    nowModify?.contentItem.component,
  )
  const [nowComponentSchema, setNowComponentSchema] = useState<IFormSchema | undefined>(
    getAntdComponentSchema(nowComponentType),
  )
  const [nowSchemaFormContent, setNowSchemaFormContent] = useState<ISchemaItem[]>(
    useAntdComponent(schemaForm.content),
  )
  const [schemaitemBaseContent] = useState(useAntdComponent(schemaItemBaseForm.content))
  const toModify = (contentItem: ISchemaItem, index: number) => {
    setNowModify({ contentItem, index })
    console.log('选择了', contentItem, index)
  }

  const changeSchemaItemBase = (schemaItem: ISchemaItem) => {
    console.log('changeSchemaItemBase', schemaItem)
    if (schemaItem.component !== nowComponentType) {
      setNowComponentType(schemaItem.component)
      setNowComponentSchema(getAntdComponentSchema(nowComponentType))
    }
  }

  const changeSchemaItemComponentSelf = (schemaItem: ISchemaItem) => {
    console.log('changeSchemaItemComponentSelf', schemaItem)
  }

  useEffect(() => {
    setNowComponentType(nowModify?.contentItem.component)
  }, [nowModify])

  useEffect(() => {
    // console.log('start', nowComponentType)
    setNowComponentSchema(getAntdComponentSchema(nowComponentType))
  }, [nowComponentType])

  return (
    <div className={editFormStyles.container}>
      <EditBoard toModifyCb={toModify} content={renderContent} />
      <div>
        <Card
          title="表单属性"
          extra={
            <Button type="primary" size="small">
              保存表单
            </Button>
          }
          style={{ width: 300 }}
        >
          <YubiForm config={schemaForm.config} state={formConfig} content={nowSchemaFormContent} />
        </Card>
        <Card
          title="表单预览"
          extra={
            <Button type="primary" size="small">
              刷新表单
            </Button>
          }
          style={{ width: 300 }}
        >
          <YubiForm config={formConfig} content={renderContent} />
        </Card>
      </div>
      <div>
        {nowModify && (
          <Card
            title={`表单项 —— ${nowModify?.contentItem.label}`}
            extra={
              <Button type="primary" size="small">
                保存表单项
              </Button>
            }
            style={{ width: 400 }}
          >
            <YubiForm
              config={schemaItemBaseForm.config}
              state={nowModify.contentItem}
              content={schemaitemBaseContent}
              change={changeSchemaItemBase}
            />
          </Card>
        )}
        {nowComponentSchema && (
          <Card title={nowComponentSchema.config?.name} style={{ width: 400 }}>
            <YubiForm
              config={nowComponentSchema.config}
              state={nowModify?.contentItem}
              content={nowComponentSchema.content}
              change={changeSchemaItemComponentSelf}
            />
          </Card>
        )}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  // const { name } = await getUserInfo();
  console.log('getStaticProps')
  return {
    props: {
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
]

export default FormEdit
