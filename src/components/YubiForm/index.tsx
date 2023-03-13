/* eslint-disable react/no-array-index-key */
/* eslint-disable no-multi-assign */
import React, { FC, useEffect, useImperativeHandle, useState } from 'react'
import { Form } from 'antd'
import { getDefaultFormValue } from 'src/libs/schemaHooks/utils'
import useExpressionCompute from 'src/libs/schemaHooks/useExpressionCompute'
import useFormContent from 'src/libs/schemaHooks/useFormContent'
import { FormInstance } from 'antd/lib/form'
import YubiFormItem from './YubiFormItem';
import { IFormConfig, IFormItem, INormalItem } from './type'
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
  content: Array<INormalItem | IFormItem>
  config?: IFormConfig
  state?: any
  style?: any
  isEdit?: boolean
  change?: (formValue: any) => void,
  // reset?: () => void;
  [key: string]: any
}

const YubiForm: FC<IProps> = ({ content, state, isOnlyRender, isEdit, config, change, ...layout }, ref) => {
  const [formValue, setFormValue] = useState<any>(getDefaultFormValue(content, state))
  const [formContent, setFormContent] = useState<Array<INormalItem | IFormItem>>()
  const formRef = React.useRef<FormInstance>(null)

  useEffect(() => {
    console.log(config?.name, '重新加载 content', formValue, ...content)
    setFormContent(useFormContent(content, useExpressionCompute(state || {}, formValue || {})))
    formRef.current?.setFieldsValue(formValue || {})
  }, [formValue, content])

  useEffect(() => {
    console.log(config?.name, 'state更新');
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

  const reset = () => {
    formRef.current?.resetFields();
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      reset();
    }
  }));

  const FormContent = formContent?.map((formItem, index) => (
    <YubiFormItem key={`yubiFormItem-${(formItem as IFormItem).prop}-${index}`} isEdit={isEdit} formItem={formItem} />
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

export default React.forwardRef<any, IProps>(YubiForm as any)
