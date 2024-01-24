import React, { useState } from 'react';

import {
  StForm,
  StFormTitle,
  StFormInput,
  StFormTextArea,
  StFormBtn
} from './MainForm.style';

const MainForm = () => {
  const [input, setInput] = useState<{ name: string; content: string }>({
    name: '',
    content: ''
  });

  const onChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const onClickForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <StForm onSubmit={onClickForm}>
      <StFormTitle>현재 멤버에게 보내고 있습니다</StFormTitle>
      <label htmlFor='main-form-name'>닉네임</label>
      <StFormInput
        id='main-form-name'
        type='text'
        name='name'
        value={input.name}
        placeholder='이름을 입력하세요'
        autoComplete='none'
        onChange={onChangeForm}
      />
      <label htmlFor='main-form-content'>내용</label>
      <StFormTextArea
        id='main-form-content'
        name='content'
        value={input.content}
        placeholder='내용을 입력하세요'
        onChange={onChangeForm}
      />
      <StFormBtn> 제출</StFormBtn>
    </StForm>
  );
};

export default MainForm;
