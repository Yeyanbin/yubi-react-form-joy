
import { AxiosResponse } from 'axios'
import { IFormSchema } from 'src/components/YubiForm/type'
import request from 'src/utils/request'

// export const getJsonByKey = (key: string): Promise<AxiosResponse<IFormSchema>> => request.post(`/getJsonByKey`, { key })

// export const getJsonByKeyList = (keyList: string[]): Promise<AxiosResponse<IFormSchema[]>> => request.post(`/getJsonByKeyList`, { keyList })

interface IJsonKeyResp {
  [key: string]: IFormSchema;
}

export const getJsonByKey = (key: string): Promise<IJsonKeyResp> => {
  const json = getJson();
  return Promise.resolve({
    key: json[key]
  })
}

export const getJsonByKeyList = (keyList: string[]): Promise<IJsonKeyResp> => {
  const json = getJson();
  const obj = {};
  keyList.forEach((key) => {
    obj[key] = json[key];
  });
  return Promise.resolve(obj);
}

const JSON_SAVE_KEY = "saveJsonKey";

const getJson = () => JSON.parse(localStorage.getItem(JSON_SAVE_KEY) || '{}');

export const initFormJson = () => {
}