/* eslint-disable react/display-name */
import React, { Input, Button } from "antd";
import { FC, useEffect, useState } from "react";
import { IBaseContentItemProps } from "../../type";

interface IProps {
  expression: string;
  onChange: (value: {
    expression: string;
  }) => void;
}

const STATE_MAP = {
  NORMAL: 1,
  EXPRESSION: 2,
};

const useExpressionInput = (ReactComponent) => ({ value, onChange, ...attr }: IBaseContentItemProps) => {

  const [state, setState] = useState(1);
  const [recordValue, setRecordValue] = useState();
  let temp;

  useEffect(() => {
    setState(value?.expression !== undefined ? STATE_MAP.EXPRESSION : STATE_MAP.NORMAL);
  }, [value]);

  const click = () => {
    if (state === STATE_MAP.EXPRESSION) {
      console.log('expression')
      temp = JSON.parse(JSON.stringify(value ?? { expression: '' }));
      onChange(recordValue ?? undefined);
      setRecordValue(temp);
    } else {
      temp = value && JSON.parse(JSON.stringify(value));
      onChange(recordValue || {
        expression: ''
      });
      setRecordValue(temp);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {
        state === STATE_MAP.NORMAL ?
          (<ReactComponent {...attr} value={value} onChange={onChange} />)
          : (<ExpressionInput {...attr} expression={value?.expression} onChange={onChange} />)
      }
      <Button type="primary" onClick={click}>
        {state === STATE_MAP.EXPRESSION ? '普通' : '表达式'}
      </Button>
    </div>
  )
}

const ExpressionInput: FC<IProps> = ({ expression, onChange }) => (
  <Input.TextArea rows={3} value={expression} placeholder="请输入你的表达式" onChange={(e) => onChange({ expression: e.currentTarget.value })} />
);


export default useExpressionInput;
