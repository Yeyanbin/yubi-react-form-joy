/* eslint-disable no-multi-assign */
import { ISchemaItem } from "./type";

/**
 * 部分对象压平，降维化 { a: {b: 1, c: 1}, d: 1} ===>   { "a.b": 1, "a.c": 1, d: 1 }
 * 
 * 不深拷贝
 */
export const planishObject = (content: ISchemaItem[], keyList: string[]) => {
  const newContent = JSON.parse(JSON.stringify(content));

  newContent.forEach((obj) => {
    keyList.forEach((key) => {
      const value = obj[key];
      // console.log('key', key, value);
      if (value) {
        // delete obj[key];
        Object.keys(value).forEach((valueKey) => {
          obj[`${key}.${valueKey}`] = value[valueKey];
        });
      }
    });
  })

  return newContent;
}

// export const rePlanishObject = (content: ISchemaItem[]) => {
//   const newContent = JSON.parse(JSON.stringify(content));
//   newContent.forEach((item) => {
//     Object.keys(item).forEach((itemKey) => {
//       const keys = itemKey.split('.');
//       // if (keys.length > 1) {
//       const last = keys.pop() as string;
//       let obj = item;
//       keys.forEach((key) => {
//         if (!obj[key]) {
//           obj[key] = {}
//         }
//         obj = obj[key]
//       });
//       obj[last] = item[itemKey]
//       if (keys.length > 0) {
//         delete item[itemKey]
//       }

//       // }
//     });
//   });
//   console.log('newContent rePlanishObject', newContent)
//   return newContent;
// }

export const rePlanishObjectSchemaItem = (schemaItem: ISchemaItem) => {
  const newObj = JSON.parse(JSON.stringify(schemaItem));
  Object.keys(newObj).forEach((itemKey) => {
    const keys = itemKey.split('.');
    if (keys.length > 1) {
      const last = keys.pop() as string;
      let obj: any = newObj;
      keys.forEach((key) => {
        obj = (obj[key] = {});
      });
      obj[last] = newObj[itemKey];
      delete newObj[itemKey];
    }
  });
  // console.log('newContent rePlanishObject schemaItem', newObj)
  // initPlanish(newObj)
  return newObj;
}

export const initPlanish = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (key.includes('.')) {
      delete obj[key]
    }
  });
}