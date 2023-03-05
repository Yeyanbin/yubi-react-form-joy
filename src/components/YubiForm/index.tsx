/* eslint-disable react/no-array-index-key */
/* eslint-disable no-multi-assign */
import React, { FC, useEffect, useState } from 'react'
import { Form } from 'antd'
import { getDefaultFormValue } from 'src/libs/schemaHooks/utils'
import useExpressionCompute from 'src/libs/schemaHooks/useExpressionCompute'
import useFormContent from 'src/libs/schemaHooks/useFormContent'
import { FormInstance } from 'antd/lib/form'
import YubiFormItem from './YubiFormItem'
import { IFormConfig, ISchemaItem } from './type'
import YubiFormStyles from './yubiForm.module.scss'

interface IFieldData {
  name: string | number | (string | number)[]
  value?: any
  touched?: boolean
  validating?: boolean
  errors?: string[]
}

interface IProps {
  isOnlyRender?: boolean
  content: ISchemaItem[]
  config?: IFormConfig
  state?: any
  style?: any
  change?: (formValue: any) => void
  [key: string]: any
}

const YubiForm: FC<IProps> = ({ content, state, isOnlyRender, config, change, ...layout }) => {
  const [formValue, setFormValue] = useState<any>(getDefaultFormValue(content, state))
  const [formContent, setFormContent] = useState<ISchemaItem[]>()
  const formRef = React.useRef<FormInstance>(null)

  useEffect(() => {
    // console.log('重新加载 content', formValue, formRef.current)
    setFormContent(useFormContent(content, useExpressionCompute(state || {}, formValue || {})))
    formRef.current?.setFieldsValue(formValue || {})
  }, [formValue, content])

  useEffect(() => {
    // console.log('state更新');
    setFormValue(state)
  }, [state])

  const onChange = (allFields: IFieldData[]) => {
    // console.log('cochange', allFields)
    const obj: any = {}
    allFields.forEach(item => {
      obj[item.name as string] = item.value
    })
    setFormValue(obj)
    change?.(obj)
  }

  const FormContent = formContent?.map(formItem => (
    <YubiFormItem key={`yubiFormItem-${formItem.prop}`} formItem={formItem} />
  ))

  return (
    <>
      <Form
        {...layout}
        {...config?.attr}
        ref={formRef}
        initialValues={formValue}
        className={YubiFormStyles.yubiform_container}
        onFieldsChange={(_, allFields) => {
          onChange(allFields)
        }}
      >
        {FormContent}
      </Form>
    </>
  )
}

export default YubiForm
