
import React, { FC, useEffect, useState } from 'react';
import { Input, Switch } from 'antd';


interface IProps {
  value: any[];
  onChange: (value: any[]) => void
}

const requiredInput: FC<IProps> = ({ value, onChange }) => {

  const [isRequired, setIsRequired] = useState(false);
  const [message, setmessage] = useState();
  const [otherRules, setOtherRules] = useState([]);

  useEffect(() => {
    console.log('requiredInput', value);
    const otherRulesTemp: any[] = [];
    if (Array.isArray(value))
      value?.forEach((v) => {
        if (v.required) {
          setIsRequired(true);
          setmessage(v.message);
        } else {
          otherRulesTemp.push(v);
        }
      })
    setOtherRules(otherRules);
  }, [value])

  const change = (type: 'msg' | 'required', v: any) => {
    console.log('change', type, v);
    if (type === 'required') {
      if (v) {
        onChange([
          ...otherRules,
          {
            required: true,
            message,
            // type: ['change']
          }
        ])
      } else {
        onChange(otherRules);
      }
    } else if (type === 'msg') {
      onChange([
        ...otherRules,
        {
          required: true,
          message: v,
          // type: ['change']
        }
      ])
    }
  };


  return (
    <div style={{ display: 'flex', }}>
      <Switch defaultChecked={isRequired} onChange={(v) => change('required', v)} />
      <div style={{ display: 'flex', marginLeft: '10px' }}>
        Message: <Input defaultValue={message} onBlur={(e) => change('msg', e.currentTarget.value)} />
      </div>
    </div>
  )
};

export default requiredInput;