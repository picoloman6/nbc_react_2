import React, { useState } from 'react';

import { MemberTypes } from '../../types/mainTypes';
import {
  StForm,
  StFormTitle,
  StFormInput,
  StFormTextArea,
  StFormBtn,
  StErrMsg
} from './MainForm.style';

interface MainFormPropsTypes {
  addLetters: (input: { name: string; content: string }) => void;
  member: MemberTypes;
}

const MainForm = ({ addLetters, member }: MainFormPropsTypes) => {
  const [input, setInput] = useState<{ name: string; content: string }>({
    name: '',
    content: ''
  });
  const [errMsg, setErrMsg] = useState<'' | 'name' | 'content'>('');

  const onChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.name === '') {
      setErrMsg('name');
      return;
    }

    if (input.content === '') {
      setErrMsg('content');
      return;
    }

    addLetters(input);
    setInput({ name: '', content: '' });
    setErrMsg('');
  };

  return (
    <StForm onSubmit={onClickForm}>
      <StFormTitle>현재 {member}에게 보내고 있습니다</StFormTitle>
      <div>
        <label htmlFor='main-form-name'>닉네임</label>
        <StErrMsg err={'name' === errMsg}>어아ㅓ이ㅏㅓ이ㅓ이</StErrMsg>
      </div>
      <StFormInput
        id='main-form-name'
        type='text'
        name='name'
        value={input.name}
        placeholder='이름을 입력하세요'
        autoComplete='none'
        onChange={onChangeForm}
      />
      <div>
        <label htmlFor='main-form-content'>내용</label>
        <StErrMsg err={'content' === errMsg}>어아ㅓ이ㅏㅓ이ㅓ이</StErrMsg>
      </div>
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
