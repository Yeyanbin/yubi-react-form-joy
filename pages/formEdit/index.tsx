/* eslint-disable no-unused-expressions */
import EditBoard from 'pagesComponents/editForm/editBoard'
import React, { FC, useEffect, useRef, useState } from 'react'
import { ISchemaItem, IFormConfig, IFormSchema } from 'src/components/YubiForm/type'
import { TComponentType, useAntdComponent } from 'src/components/YubiForm/antdComponents'
import editFormStyles from 'src/styles/editForm.module.scss'
import editFormDemoStyles from 'src/styles/editFormDemo.module.scss'

import { Card, Button } from 'antd'
import YubiForm from 'src/components/YubiForm'
import {
  getAntdComponentSchema,
  schemaForm,
  schemaItemBaseForm,
} from 'pagesComponents/editForm/formConfig'
import { PlusOutlined } from '@ant-design/icons';
import { initPlanish, planishObject, rePlanishObjectSchemaItem } from 'src/components/YubiForm/utils'
import JsonEditor from 'pagesComponents/editForm/demo/jsonEditor'
import { getJsonByKey, getJsonByKeyList } from 'src/api/formJson'

interface IProps {
  formContent: ISchemaItem[]
  formConfig: IFormConfig
}

interface INowModify {
  contentItem: ISchemaItem
  index: number
}

const needPlanishKeyList = ['attr'];

const FormEdit: FC<IProps> = ({ formConfig, formContent }) => {

  // 降维化的
  const newContent = planishObject(formContent, needPlanishKeyList);

  useEffect(() => {
    getJsonByKeyList(['test', '88']).then((resp) => {
      console.log("getJsonByKey", resp)
    });
    console.log('window', window, localStorage);
  }, [])

  // 目前的schema
  const [schemaContent, setSchemaContent] = useState<ISchemaItem[]>(newContent);
  // 含有渲染组件的schema
  const [renderContent, setRenderContent] = useState(useAntdComponent(schemaContent))

  // 当前修改的原内容
  const [nowModify, setNowModify] = useState<INowModify>()

  const [nowComponentType, setNowComponentType] = useState<TComponentType>(
    nowModify?.contentItem.component,
  )

  // 现在的组件的表单schema
  const [nowComponentSchema, setNowComponentSchema] = useState<IFormSchema | undefined>(
    getAntdComponentSchema(nowComponentType),
  )
  // 现在的表单属性的表单schema
  const [nowSchemaFormContent, setNowSchemaFormContent] = useState<ISchemaItem[]>(
    useAntdComponent(schemaForm.content),
  )

  // 现在的被修改的组件的schemaItem
  const [nowPreSaveSchemaItem, setNowPreSaveSchemaItem] = useState<ISchemaItem>();

  const [schemaitemBaseContent] = useState(useAntdComponent(schemaItemBaseForm.content))

  const toModify = (contentItem: ISchemaItem, index: number) => {
    initPlanish(contentItem);
    setNowModify({ contentItem, index })
    console.log('选择了', contentItem, index)
    setNowPreSaveSchemaItem(planishObject([contentItem], needPlanishKeyList)[0]);
  }

  const toDelete = (index: number) => {
    setSchemaContent([...schemaContent.slice(0, index), ...schemaContent.slice(index + 1)])
  }

  const changeSchemaItemBase = (schemaItem: ISchemaItem) => {
    console.log('changeSchemaItemBase', schemaItem)
    setNowPreSaveSchemaItem({
      ...nowPreSaveSchemaItem,
      ...schemaItem
    });
    if (schemaItem.component !== nowComponentType) {
      setNowComponentType(schemaItem.component)
      setNowComponentSchema(getAntdComponentSchema(nowComponentType))
    }
  }

  const changeSchemaItemComponentSelf = (schemaItem: ISchemaItem) => {
    console.log('changeSchemaItemComponentSelf', schemaItem)
    setNowPreSaveSchemaItem({
      ...nowPreSaveSchemaItem,
      ...schemaItem
    });
  }

  const addContent = () => {
    setSchemaContent([
      ...schemaContent,
      ...[{
        component: 'Input',
        prop: `default-${schemaContent.length}`,
        label: `default-${schemaContent.length}`,
        hidden: false,
      }]
    ])
  };

  const saveSchemaItem = () => {
    // schemaForm
    const test = [...schemaContent];
    test[nowModify!.index] = rePlanishObjectSchemaItem(nowPreSaveSchemaItem!);
    console.log('saveSchemaItem', test)
    setSchemaContent(test);
  }

  useEffect(() => {
    setNowComponentType(nowModify?.contentItem.component)
  }, [nowModify])

  useEffect(() => {
    // console.log('start', nowComponentType)
    setNowComponentSchema(getAntdComponentSchema(nowComponentType))
  }, [nowComponentType])

  useEffect(() => {
    // console.log('nowModify', nowModify)
    setRenderContent(useAntdComponent(schemaContent))
  }, [schemaContent])

  return (
    <div className={editFormStyles.container}>
      <div className={editFormStyles.container_editBoard}>
        <EditBoard toModifyCb={toModify} toDeleteCb={toDelete} content={renderContent} />
        <div className={editFormStyles.container_editBoard_item}>
          <Button
            type="dashed"
            style={{ width: '450px' }}
            onClick={addContent}
            icon={<PlusOutlined />}
          >
            增加表单项
          </Button>
        </div>
        <JsonEditor
          height="500px"
          className={editFormDemoStyles.container_jsonSchema}
          content={schemaContent}
        />
      </div>
      <div>
        <Card
          title="表单属性"
          extra={
            <Button type="primary" size="small">
              保存表单（待做
            </Button>
          }
          style={{ width: 400 }}
        >
          <YubiForm config={schemaForm.config} state={formConfig} content={nowSchemaFormContent} />
        </Card>
        <Card
          title="表单预览"
          // extra={
          //   <Button type="primary" size="small">
          //     刷新表单
          //   </Button>
          // }
          style={{ width: 400 }}
        >
          <YubiForm config={formConfig} content={renderContent} />
        </Card>
      </div>
      <div>
        {nowModify && (
          <Card
            title={`表单项 —— ${nowModify?.contentItem.label}`}
            extra={
              <Button type="primary" size="small" onClick={saveSchemaItem}>
                保存表单项
              </Button>
            }
            style={{ width: 400 }}
          >
            <YubiForm
              config={schemaItemBaseForm.config}
              state={nowPreSaveSchemaItem}
              content={schemaitemBaseContent}
              change={changeSchemaItemBase}
            />
          </Card>
        )}
        {nowComponentSchema && (
          <Card title={nowComponentSchema.config?.name} style={{ width: 400 }}>
            <YubiForm
              config={nowComponentSchema.config}
              state={nowPreSaveSchemaItem}
              content={nowComponentSchema.content}
              change={changeSchemaItemComponentSelf}
            />
          </Card>
        )}
        <div>
          {JSON.stringify(nowPreSaveSchemaItem)}
        </div>
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
    label: '登陆',
    prop: 'user',
    attr: {
      placeholder: '请输入你的账号',
    },
  },
  {
    component: 'Input.Password',
    label: '密码',
    prop: 'password',
  },
  {
    component: 'Input.TextArea',
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
