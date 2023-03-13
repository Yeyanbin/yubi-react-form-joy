/* eslint-disable react/no-array-index-key */

import React, { FC, useEffect, useState } from 'react'
import { ISchemaItem } from 'src/components/YubiForm/type'
import editFormStyles from 'src/styles/editForm.module.scss'
import ListItem from './listItem';

interface IProps {
  content: Array<ISchemaItem>;
  toModifyCb: (contentItem: ISchemaItem, index: number) => void
  toDeleteCb: (index: number) => void
}

const editBoard: FC<IProps> = ({ content, toModifyCb, toDeleteCb, ...layout }) => {
  const [componentList, setComponentList] = useState(content)
  // const [pageType, setPageType] = useState();

  useEffect(() => {
    setComponentList(content)
  }, [content])

  return (
    <>
      {componentList.map((item, index) => (
        <ListItem
          toDeleteCb={toDeleteCb}
          toModifyCb={toModifyCb}
          key={`${(item as any).prop || 'str'}-${index}`}
          contentItem={item}
          contentItemIndex={index}
        />
      ))}
    </>
  )
}

export default editBoard
