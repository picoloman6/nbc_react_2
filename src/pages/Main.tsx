import { ReactElement, useEffect } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import FanLetter from '../components/Main/FanLetter';
import { getLettersThunk } from '../store/fanLetters';
import { RootState, useAppSelector, useThunkDispatch } from '../store';
import { MemberTypes } from '../types/mainTypes';

interface MainPropsTypes {
  member: MemberTypes;
  changeMember: (newMember: MemberTypes) => void;
}

const Main = ({ member, changeMember }: MainPropsTypes) => {
  const dispatch = useThunkDispatch();
  const data = useAppSelector((state: RootState) => state.letters);

  useEffect(() => {
    dispatch(getLettersThunk());
  }, [dispatch]);

  return (
    <>
      <Header member={member} changeMember={changeMember} />
      <MainForm member={member} />
      <ul>
        {!data.loading &&
          data.letters.reduce(
            (acc: ReactElement[], cur) =>
              cur.member === member
                ? [...acc, <FanLetter key={cur.id} letter={cur} />]
                : acc,
            []
          )}
      </ul>
    </>
  );
};

export default Main;
