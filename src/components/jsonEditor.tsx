import React, { useEffect, useState } from 'react'
import { Input, Button, message } from 'antd'
import locale from 'react-json-editor-ajrm/locale/zh-cn';
import JSONInput from 'react-json-editor-ajrm';

interface IProps {
  content: any;
  change?: (obj: any) => void
  height: string;
  options?: any;
  width?: string;
  [key: string]: any;
}

const jsonEditor = ({ content, change, height, width, options, ...layout }: IProps) => {
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
    <div {...layout} style={{ textAlign: 'left', }}    >
      {contextHolder}
      <JSONInput
        {...options}
        locale={locale}
        placeholder={content}
        id="my-json-edit-input"
        height={height}
        width={width}
        onBlur={onChange} />
    </div>
  )
}

export default jsonEditor
