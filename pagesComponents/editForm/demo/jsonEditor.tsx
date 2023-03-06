import React, { useEffect, useState } from 'react'
import { Input, Button, message } from 'antd'
import editFormDemoStyles from 'src/styles/editFormDemo.module.scss'
import locale from 'react-json-editor-ajrm/locale/zh-cn';
import JSONInput from 'react-json-editor-ajrm';

interface IProps {
  content: any
  change: (obj: any) => void
  [key: string]: any
}

const jsonEditor = ({ content, change, ...layout }: IProps) => {
  let json = JSON.stringify(content)
  const [messageApi, contextHolder] = message.useMessage()

  const modify = () => {
    try {
      change(JSON.parse(json))
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: 'json不合法',
        duration: 5,
      })
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    json = e.target.value
  }

  return (
    <div {...layout}>
      {contextHolder}
      <JSONInput
        placeholder={content}
        id="my-json-edit-input"
        height="600px"
        onChange={onChange}>

      </JSONInput>
      <Button onClick={modify}>修改</Button>
    </div>
  )
}

export default jsonEditor
