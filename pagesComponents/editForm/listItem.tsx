/* eslint-disable @typescript-eslint/no-empty-function */

import React, { FC, useRef, useState } from 'react'
import { INormalItem, ISchemaItem } from 'src/components/YubiForm/type'
import YubiForm from 'src/components/YubiForm'
import editFormStyles from 'src/styles/editForm.module.scss'
import { Button, Radio } from 'antd'

interface IProps {
  contentItem: ISchemaItem | INormalItem
  contentItemIndex: number
  toModifyCb: (contentItem: ISchemaItem, index: number) => void
  toDeleteCb: (index: number) => void
}

const ListItem: FC<IProps> = ({ contentItem, contentItemIndex, toModifyCb, toDeleteCb, ...layout }) => {
  // 拦截
  // const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
  //   event.stopPropagation();
  // };

  const click: React.MouseEventHandler<HTMLDivElement> = event => {
    console.log('click', event, contentItem)
  }

  const toModify: React.MouseEventHandler<HTMLDivElement> = event => {
    console.log('click', event)
    toModifyCb(contentItem as any, contentItemIndex)
  }

  const toDelete = () => {
    toDeleteCb(contentItemIndex)
  }

  return (
    <div {...layout} className={editFormStyles.container_editBoard_item} onClickCapture={click}>
      <div className={editFormStyles.container_editBoard_item__content}>
        <YubiForm change={() => { }} isEdit content={[contentItem]} />
      </div>
      <div className={editFormStyles.container_editBoard_item__btn}>
        <Button danger size="small" value="large" onClick={toDelete}>
          删除
        </Button>
        <Button type="primary" size="small" value="default" onClick={toModify}>
          修改
        </Button>
      </div>
    </div>
  )
}

export default ListItem
