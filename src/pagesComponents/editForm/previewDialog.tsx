import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { IFormSchema } from 'src/components/YubiSchema/type';
import Highlight from 'react-highlight';
import { transFormSchema } from './ejsUtils';


interface IProps {
  btnText?: string;
  onClick: (update: (formSchema?: IFormSchema) => void) => void
}

const App: React.FC<IProps> = ({ btnText, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState('default content');
  const showModal = () => {
    onClick((formSchema) => {
      if (formSchema) {

        const formSchemaStr = transFormSchema(formSchema);
        console.log('formSchemaStr', formSchemaStr);
        setContent(formSchemaStr);
      }
    });
    if (content) {
      setIsModalOpen(true);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} >
        {btnText ?? '点击'}
      </Button>
      <Modal title="代码预览" width={1800} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Highlight className='html'>
        {content}
      </Highlight>
      </Modal>
    </>
  );
};

export default App;
