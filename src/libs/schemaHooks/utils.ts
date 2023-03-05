import { ISchemaItem } from 'src/components/YubiForm/type'

/**
 * 初始化表单的值
 * @param content
 * @param state
 * @returns
 */
export const getDefaultFormValue = (content: ISchemaItem[], state = {}) => {
  const obj = {}
  content.forEach(item => {
    if (!item.prop) return
    obj[item.prop] = state[item.prop] || ''
  })
  // console.log('default Form Value', obj);
  return obj
}
