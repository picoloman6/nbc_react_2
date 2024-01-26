import { ReactElement, useContext, useEffect } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import FanLetter from '../components/Main/FanLetter';
import { MemberContext } from '../store/Context';
import { getLettersThunk } from '../store/fanLetters';
import { RootState, useAppSelector, useThunkDispatch } from '../store';

const Main = () => {
  const { member, changeMember, addLetters } = useContext(MemberContext);
  const dispatch = useThunkDispatch();
  const letters = useAppSelector((state: RootState) => state.letters.letters);

  useEffect(() => {
    dispatch(getLettersThunk());
  }, []);

  return (
    <>
      <Header member={member} changeMember={changeMember} />
      <main>
        <MainForm member={member} addLetters={addLetters} />
        {letters.reduce(
          (acc: ReactElement[], cur) =>
            cur.member === member
              ? [...acc, <FanLetter key={cur.id} letter={cur} />]
              : acc,
          []
        )}
      </main>
    </>
  );
};

export default Main;
