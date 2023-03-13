/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-expressions */
import EditBoard from 'pagesComponents/editForm/editBoard'
import React, { FC, useEffect, useRef, useState } from 'react'
import { IFormConfig, INormalItem, IFormItem, IFormSchema } from 'src/components/YubiForm/type'
import { TComponentType, useAntdComponent } from 'src/components/YubiForm/antdComponents'
import editFormStyles from 'src/styles/editForm.module.scss'
import editFormDemoStyles from 'src/styles/editFormDemo.module.scss'

import { Card, Button } from 'antd'
import YubiForm from 'src/components/YubiForm'
import {
  getAntdComponentSchema,
  schemaFormConfig,
  schemaItemBaseForm,
  schemaItemNormalForm,
} from 'pagesComponents/editForm/formConfig'
import { PlusOutlined } from '@ant-design/icons';
// import { initPlanish, planishObject, rePlanishObjectSchemaItem } from 'src/components/YubiForm/utils'
import JsonEditor from 'pagesComponents/editForm/demo/jsonEditor'
import { getJsonByKey, getJsonByKeyList } from 'src/api/formJson'

interface IProps {
  formContent: Array<INormalItem | IFormItem>
  formConfig: IFormConfig
}

interface INowModify {
  contentItem: INormalItem | IFormItem
  index: number
}

const needPlanishKeyList = ['attr'];

const FormEdit: FC<IProps> = ({ formConfig, formContent }) => {

  const componentAttrFormRef: any = useRef();
  const componentBaseFormRef: any = useRef();
  const formConfigFormRef = useRef()
  const schemaContentFormConfigRender = useAntdComponent(schemaFormConfig.content);

  useEffect(() => {
    getJsonByKeyList(['test', '88']).then((resp) => {
      console.log("getJsonByKey", resp)
    });
    console.log('window', window, localStorage);
  }, [])

  // 目前的schema
  const [schemaContent, setSchemaContent] = useState<Array<INormalItem | IFormItem>>(formContent);
  // 含有渲染组件的schema
  const [renderContent, setRenderContent] = useState(useAntdComponent(schemaContent))
  // 目前的IFormSchema
  const [formSchema, setFormSchema] = useState<IFormSchema>();

  const [nowFormConfig, setNowFormConfig] = useState(formConfig);
  useEffect(() => {
    setFormSchema({
      content: schemaContent,
      config: nowFormConfig,
      defaultState: {}
    })
  }, [schemaContent, nowFormConfig]);
  // 当前修改的原内容
  const [nowModify, setNowModify] = useState<INowModify>()

  const [nowComponentType, setNowComponentType] = useState<TComponentType | string>(
    nowModify?.contentItem.component,
  )

  // 现在的组件的表单schema
  const [nowComponentSchema, setNowComponentSchema] = useState<IFormSchema | undefined>(
    getAntdComponentSchema(nowComponentType),
  )

  // 现在的表单属性的表单schema
  // const [nowSchemaFormConfigContent] = useState<INormalItem | IFormItem[]>(
  //   useAntdComponent(),
  // );

  // 现在的被修改的组件的schemaItem
  const [nowPreSaveSchemaItem, setNowPreSaveSchemaItem] = useState<INormalItem | IFormItem>();

  const [schemaitemBaseContent] = useState(useAntdComponent(schemaItemBaseForm.content))
  const [schemaitemNromalContent] = useState(useAntdComponent(schemaItemNormalForm.content))

  const toModify = (contentItem: INormalItem | IFormItem, index: number) => {
    setNowModify({ contentItem, index } as any)
    console.log('选择了', contentItem, index)
    setNowPreSaveSchemaItem(contentItem);

    // console.log('componentAttrFormRef', componentAttrFormRef);
    setTimeout(() => {
      componentBaseFormRef?.current?.reset();
      componentAttrFormRef?.current?.reset();
    });
  }

  const toDelete = (index: number) => {
    setSchemaContent([...schemaContent.slice(0, index), ...schemaContent.slice(index + 1)])
  }

  const changeSchemaItemBase = (schemaItem: INormalItem | IFormItem) => {
    console.log('changeSchemaItemBase', schemaItem)
    setNowPreSaveSchemaItem({
      ...nowPreSaveSchemaItem,
      ...schemaItem
    });
    if (schemaItem.component !== nowComponentType) {
      setNowComponentType(schemaItem.component)
      setNowComponentSchema(getAntdComponentSchema(nowComponentType))
      console.log('setNowComponentSchema', getAntdComponentSchema(nowComponentType))
    }
  }

  const changeSchemaItemComponentSelf = (attr: any | undefined) => {
    console.log('changeSchemaItemComponentSelf attr', attr)
    setNowPreSaveSchemaItem({
      ...nowPreSaveSchemaItem!,
      attr,
    });
  }

  const addContent = (type: 'formItem' | 'normal') => {
    setSchemaContent([
      ...schemaContent,
      ...[
        (type === 'formItem' ?
          {
            component: 'Input',
            prop: `default-${schemaContent.length}`,
            label: `default-${schemaContent.length}`,
            hidden: false,
          }
          : {
            component: 'p',
            innerHtml: '123'
          }
        ) as any]
    ])
  };

  const saveFormConfig = () => {
    console.log('formConfig', nowFormConfig);
  }

  const changeSchemaFormConfig = (v) => {
    // setNowSchemaFormConfigContent(v);
    setNowFormConfig(v);
  }

  const saveSchemaItem = () => {
    // schemaFormConfig
    const test = [...schemaContent];
    test[nowModify!.index] = nowPreSaveSchemaItem!;
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
            style={{ width: '300px' }}
            onClick={() => addContent('formItem')}
            icon={<PlusOutlined />}
          >
            增加表单项
          </Button>
          <Button
            type="dashed"
            style={{ width: '150px' }}
            onClick={() => addContent('normal')}
            icon={<PlusOutlined />}
          >
            增加普通标签
          </Button>
        </div>
        <JsonEditor
          options={{
            viewOnly: true
          }}
          height="500px"
          className={editFormDemoStyles.container_jsonSchema}
          content={formSchema}
        />
      </div>
      <div>
        <Card
          title="表单属性"
          extra={
            <Button type="primary" size="small" onClick={saveFormConfig}>
              保存表单配置（待完成
            </Button>
          }
          style={{ width: 400 }}
        >
          <YubiForm ref={formConfigFormRef}
            config={schemaFormConfig.config}
            state={formConfig}
            content={schemaContentFormConfigRender}
            change={changeSchemaFormConfig} />
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
      (<div>
        {nowModify && (
          <Card
            title={`表单项 —— ${(nowModify?.contentItem as IFormItem).label}`}
            extra={
              <Button type="primary" size="small" onClick={saveSchemaItem}>
                保存表单项
              </Button>
            }
            style={{ width: 400 }}
          >
            {(nowModify?.contentItem as any).prop ? (
              <div className={editFormStyles.container_form__content}>
                <YubiForm
                  ref={componentBaseFormRef}
                  config={schemaItemBaseForm.config}
                  state={nowPreSaveSchemaItem}
                  content={schemaitemBaseContent}
                  change={changeSchemaItemBase}
                />
              </div>
            ) : (
              <div className={editFormStyles.container_form__content}>
                <YubiForm
                  ref={componentBaseFormRef}
                  config={schemaItemNormalForm.config}
                  state={nowPreSaveSchemaItem}
                  content={schemaitemNromalContent}
                  change={changeSchemaItemBase}
                />
              </div>
            )}
          </Card>
        )}
        {nowComponentSchema && (
          <Card title={nowComponentSchema.config?.name} style={{ width: 400 }}>
            <div className={editFormStyles.container_form__content}>
              <YubiForm
                className={editFormStyles.container_form__content}
                ref={componentAttrFormRef}
                config={nowComponentSchema.config}
                state={{
                  ...nowComponentSchema.defaultState,
                  ...nowPreSaveSchemaItem?.attr,
                }}
                content={nowComponentSchema.content}
                change={changeSchemaItemComponentSelf}
              />
            </div>
          </Card>
        )}
        <div>
          {JSON.stringify(nowPreSaveSchemaItem)}
        </div>
      </div>)
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

const defaultFormContent: Array<INormalItem | IFormItem> = [
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
    component: 'p',
    innerHtml: '一个普通的P标签',
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
    attr: {
      options: [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ],
    }
  },
  {
    label: '水果',
    component: 'Radio',
    prop: 'frust',
    attr: {
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: true },
      ],
    }
  },
]

export default FormEdit
