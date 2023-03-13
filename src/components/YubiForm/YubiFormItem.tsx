/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react'
import { Form } from 'antd'
import { IFormItem, INormalItem } from './type'

interface IProps {
  formItem: IFormItem | INormalItem | any
  isEdit,
}

const schemaFormItemEditConfig = {
  hidden: false,
};

const YubiFormItem: FC<IProps> = ({ formItem, isEdit }) => (
  formItem.prop ?
    (<Form.Item key={formItem.prop} name={formItem.prop} label={formItem.label} {...formItem} {...(isEdit && schemaFormItemEditConfig)}>
      <formItem.renderComponent {...formItem.attr}>
        {formItem.innerHtml}
      </formItem.renderComponent>
    </Form.Item>)
    : (formItem.renderComponent ? (
      <formItem.renderComponent {...formItem.attr}>
        {formItem.innerHtml}
      </formItem.renderComponent>
    )
      : (
        <formItem.component {...formItem.attr}>
          {formItem.innerHtml}
        </formItem.component>
      ))

)

export default YubiFormItem
