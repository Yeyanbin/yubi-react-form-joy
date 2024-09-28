
import React, { FC, useEffect, useState } from 'react';
import { Input, Select } from 'antd';

interface IOption {
  label?: string;
  value: string;
}


interface IProps {
  options: IOption[];
  value: string;
  inputWidth?: number;
  unitWidth?: number;
  defaultOptionValue?: string;
  onChange: (value: string) => void;
}

const UnitInput: FC<IProps> = ({ value, options, defaultOptionValue, inputWidth, unitWidth, onChange }) => {

  const [inputValue, setInputValue] = useState('');
  const [unitValue, setUnitValue] = useState(defaultOptionValue || options[0].value);

  useEffect(() => {
    if (value) {
      console.log("UnitInput", 'init', value);
      const nowUnit = options.filter((option) => value.includes(option.value))[0]?.value;
    // const nowValue =
      if (nowUnit) {
        setUnitValue(nowUnit);
        setInputValue(value.split(nowUnit)[0]);
      }
    } 
  }, [])

  const changeInputValue = (v) => {
    setInputValue(v);
    onChange(`${v}${unitValue}`);
  }

  const changeUnit = (v) => {
    setUnitValue(v);
    onChange(`${inputValue}${v}`);
  }

  return (
    <>
    <div style={{ display: 'flex', }}>
      <Input style={{ width: `${inputWidth}px` || '200px' }} defaultValue={inputValue} onBlur={(e) => changeInputValue(e.currentTarget.value)} />
      <Select style={{ width: `${unitWidth}px` || '50px' }} defaultValue={unitValue} options={options} onChange={changeUnit}/>
    </div>    
  </>);
};

export default UnitInput;
