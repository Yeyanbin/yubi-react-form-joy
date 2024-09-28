const useFormContent = (
  content: Array<any>,
  { toReversePolishNotation, computeReversePolishNotation },
) => {
  /**
   * 深拷贝处理一个item的所有属性
   * @param item content中的某一行
   * @returns
   */
  const handleNormalObject = item => {
    const newItem = {}

    Object.keys(item).forEach(key => {
      // 白名单
      if (['component', 'renderComponent'].some(whiteListItem => whiteListItem === key)) {
        // console.log('key component')
        newItem[key] = item[key]
        return
      }
      if (typeof item[key] === 'string') {
        // 发现一个值其是字符串
        newItem[key] = item[key]
      } else if (typeof item[key] === 'number') {
        newItem[key] = item[key]
      } else if (Array.isArray(item[key])) {
        // 是数组
        newItem[key] = item[key]
      } else if (typeof item[key] === 'object') {
        // 发现一个值其是对象
        if (item[key].value !== undefined || item[key].expression !== undefined) {
          // 查看是否带有value或者expression属性，是则认为其是值对象
          newItem[key] = handleValueObject(item[key])

        } else if (item[key] === undefined){

          newItem[key] = undefined;
        } else {
          // 继续深拷贝
          newItem[key] = handleNormalObject(item[key])
        }
      } else {
        // 兜底
        newItem[key] = item[key]
      }
    })
    return newItem
  }

  /**
   * 值对象处理
   * @param valueObject
   */
  const handleValueObject = valueObject => {
    const { value, expression } = valueObject

    // if (type ==='string') {
    //   computeValue = `${handleExpression(expression) || value}`;
    // } else if (type === 'number') {
    //   // console.log(expression);
    //   computeValue = +(expression && handleExpression(expression) || value);
    // } else if (type === 'array') {
    //   // computeValue = +(handleExpression(expression) || value);
    // } else if (type === 'boolean') {
    //   computeValue = handleExpression(expression) || value;
    //   computeValue = computeValue === 'false' ? false : Boolean(computeValue);
    // }
    // return (expression && handleExpression(expression)) || value
    return handleExpression(expression) || value
  }

  const handleExpression = expression => {
    // console.log('11112222', expression);
    // console.log('11112222', toReversePolishNotation(expression));
    // console.log('11112222', computeReversePolishNotation(toReversePolishNotation(expression)));
    return computeReversePolishNotation(toReversePolishNotation(expression));
  }

  const newContent: any[] = []

  content.forEach(item => {
    if (item.show) {
      // 处理show
      const show = handleExpression(item.show.expression) || item.show.value
      if (show && show !== 'false') {
        // console.log('show');
        newContent.push(handleNormalObject(item))
      }
    } else {
      // 普通情况
      newContent.push(handleNormalObject(item))
    }
  })
  return newContent
}

export default useFormContent
