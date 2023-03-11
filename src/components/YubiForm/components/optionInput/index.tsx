
import React, { FC, useEffect, useState } from 'react';
import { Input, Button, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import OptionInputStyles from "./optionInput.module.scss";

interface IOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface IProps {
  value: IOption[];
  onChange?: (value: IOption[]) => void;
  useDisabled?: boolean;
}

const OptionInput: FC<IProps> = ({ value, onChange, useDisabled }) => {

  const [options, setOptions] = useState<IOption[]>(value || []);
  // const options = value || [];

  const change = (newValue: any, type: 'label' | 'value' | 'disabled', index: number) => {
    options[index][type as string] = newValue;
    // setOptions(options);
    onChange?.(options)
  }

  useEffect(() => {
    setOptions(value || [])
  }, [value])

  const add = () => {
    setOptions([...options, {
      label: '', value: ''
    }]);
    // console.log('add', options)
  };

  return (
    <>
      <div className={OptionInputStyles.container}>
        <div className={OptionInputStyles.container__label}>
          <div className={OptionInputStyles.container__item}>
            Label
          </div>
          {
            options.map((option, index) => (
              <div key={`${option.label}-${option.value}`} className={OptionInputStyles.container__item}>
                <Input defaultValue={option.label} onBlur={(e) => change(e.currentTarget.value, 'label', index)} />
              </div>
            ))
          }
        </div>
        <div className={OptionInputStyles.container__value}>
          <div className={OptionInputStyles.container__item}>
            Value
          </div>
          {
            options.map((option, index) => (
              <div key={`${option.label}-${option.value}`} className={OptionInputStyles.container__item}>
                <Input defaultValue={option.value} onBlur={(e) => change(e.currentTarget.value, 'value', index)} />
              </div>
            ))
          }
        </div>
        {useDisabled && (
          <div className={OptionInputStyles.container__value}>
            <div className={OptionInputStyles.container__item}>
              Disabled
            </div>
            {
              options.map((option, index) => (
                <div key={`${option.label}-${option.value}`} className={OptionInputStyles.container__item}>
                  <Switch defaultChecked={option.disabled} onChange={(v) => change(v, 'disabled', index)} />
                </div>
              ))
            }
          </div>
        )}
      </div>
      <div>
        <Button
          onClick={add}
          type="dashed"
          style={{ width: '300px' }}
          icon={<PlusOutlined />}
        >
          增加表单项
        </Button>
      </div>
    </>
  )
};

export default OptionInput;