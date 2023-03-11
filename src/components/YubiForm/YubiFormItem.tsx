/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react'
import { Form } from 'antd'
import { ISchemaItem } from './type'

interface IProps {
  formItem: ISchemaItem
  isEdit,
}

const schemaFormItemEditConfig = {
  hidden: false,
};

const YubiFormItem: FC<IProps> = ({ formItem, isEdit }) => (
  <Form.Item key={formItem.prop} name={formItem.prop} label={formItem.label} {...formItem} {...(isEdit && schemaFormItemEditConfig)}>
    <formItem.renderComponent {...formItem.attr} options={formItem.options}>
      {formItem.innerHtml}
    </formItem.renderComponent>
  </Form.Item>
)

export default YubiFormItem
