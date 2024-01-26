import React, { useState } from 'react';

import { MemberTypes } from '../../types/mainTypes';
import { getLettersThunk } from '../../store/fanLetters';
import { useThunkDispatch } from '../../store';
import { postFanLetters } from '../../apis/fanLetters';
import {
  StForm,
  StFormTitle,
  StFormInput,
  StFormTextArea,
  StFormBtn,
  StErrMsg
} from './MainForm.style';

interface MainFormPropsTypes {
  member: MemberTypes;
}

const MainForm = React.memo(({ member }: MainFormPropsTypes) => {
  const dispatch = useThunkDispatch();
  const [input, setInput] = useState<{ name: string; content: string }>({
    name: '',
    content: ''
  });

  const [errMsg, setErrMsg] = useState<{
    type: '' | 'name' | 'content';
    msg: string;
  }>({ type: '', msg: '' });

  const onChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onClickForm = async (e: React.FormEvent) => {
    const { name, content } = input;
    e.preventDefault();

    if (name === '') {
      setErrMsg(() => ({ type: 'name', msg: '이름을 입력하세요.' }));
      return;
    }

    if (content === '') {
      setErrMsg(() => ({ type: 'content', msg: '내용을을 입력하세요.' }));
      return;
    }

    await postFanLetters({ name, content, member });

    dispatch(getLettersThunk());

    setInput(() => ({ name: '', content: '' }));
    setErrMsg(() => ({ type: '', msg: '' }));
  };

  return (
    <StForm onSubmit={onClickForm}>
      <StFormTitle>현재 {member}에게 보내고 있습니다</StFormTitle>
      <div>
        <label htmlFor='main-form-name'>닉네임</label>
        <StErrMsg>{errMsg.type === 'name' ? errMsg.msg : ''}</StErrMsg>
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
        <StErrMsg>{errMsg.type === 'content' ? errMsg.msg : ''}</StErrMsg>
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
});

export default MainForm;
