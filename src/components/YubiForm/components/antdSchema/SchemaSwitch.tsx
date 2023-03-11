import { Switch } from 'antd'
import React from 'react';

const SchemaSwitch = ({ value, ...attr }) => (<Switch checked={value} {...attr} />)

export default SchemaSwitch;