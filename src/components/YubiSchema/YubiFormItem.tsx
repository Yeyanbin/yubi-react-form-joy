/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react'
import { Form } from 'antd'
import { IFormItem, INormalItem } from './type'

interface IProps {
  formItem: IFormItem | INormalItem | any;
  isEdit?: boolean;
}

const schemaFormItemEditConfig = {
  hidden: false,
};

const renderComponent = (RenderComponent: any, innerHtml, attr) => RenderComponent && (<RenderComponent {...attr}>{innerHtml}</RenderComponent>)

const YubiFormItem: FC<IProps> = ({ formItem, isEdit }) => (
  formItem.prop ?
    (<Form.Item key={formItem.prop} name={formItem.prop} label={formItem.label} {...formItem} {...(isEdit && schemaFormItemEditConfig)}>
      {renderComponent(formItem.renderComponent || formItem.component, formItem.innerHtml, formItem.attr)}
    </Form.Item>)
    : renderComponent(formItem.renderComponent || formItem.component, formItem.innerHtml, formItem.attr)

)

export default YubiFormItem
