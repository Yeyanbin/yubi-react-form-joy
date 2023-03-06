import React, { useEffect, useState } from 'react'
import { Input, Button, message } from 'antd'
import editFormDemoStyles from 'src/styles/editFormDemo.module.scss'
import locale from 'react-json-editor-ajrm/locale/zh-cn';
import JSONInput from 'react-json-editor-ajrm';

interface IProps {
  content: any
  change?: (obj: any) => void
  height: string;
  [key: string]: any
}

const jsonEditor = ({ content, change, height, ...layout }: IProps) => {
  const [messageApi, contextHolder] = message.useMessage()

  const onChange = (e: any) => {
    // json = e.target.value
    // console.log(e);
    if (!change) {
      return;
    }

    if (!e.error) {
      change(e.jsObject);
      messageApi.success({
        content: `修改成功`
      })
    } else {
      messageApi.error({
        content: `json不合法`
      })
    }
  }

  return (
    <div {...layout}>
      {contextHolder}
      <JSONInput
        placeholder={content}
        id="my-json-edit-input"
        height={height}
        onChange={onChange} />
    </div>
  )
}

export default jsonEditor
