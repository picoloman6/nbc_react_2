import { ReactElement, useEffect, useState } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import FanLetter from '../components/Main/FanLetter';

import { postFanLetters } from '../apis/fanLetters';
import { getLettersThunk } from '../store/fanLetters';
import { RootState, useAppSelector, useThunkDispatch } from '../store';

import { MemberTypes, ErrMsgTypes, ClickFormTypes } from '../types';

import { StMainUl } from './Main.style';
import { checkFormValue } from '../controllers';

interface MainPropsTypes {
  member: MemberTypes;
  changeMember: (newMember: MemberTypes) => void;
}

const Main = ({ member, changeMember }: MainPropsTypes) => {
  const dispatch = useThunkDispatch();
  const data = useAppSelector((state: RootState) => state.letters);

  const [errMsg, setErrMsg] = useState<ErrMsgTypes>({ type: '', msg: '' });

  const onClickForm: ClickFormTypes = async (e, name, content, setInput) => {
    e.preventDefault();

    const checkResult = checkFormValue(name, content);
    setErrMsg(checkResult);

    if (checkResult.type !== '') {
      return;
    }

    await postFanLetters({ name, content, member });
    dispatch(getLettersThunk());
    setInput({ name: '', content: '' });
  };

  useEffect(() => {
    dispatch(getLettersThunk());
  }, [dispatch]);

  return (
    <>
      <Header member={member} changeMember={changeMember} />
      <MainForm member={member} errMsg={errMsg} onClickForm={onClickForm} />
      <StMainUl>
        {!data.loading &&
          data.letters.reduce(
            (acc: ReactElement[], cur) =>
              cur.member === member
                ? [...acc, <FanLetter key={cur.id} letter={cur} />]
                : acc,
            []
          )}
      </StMainUl>
    </>
  );
};

export default Main;
