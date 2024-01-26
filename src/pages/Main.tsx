import { ReactElement, useContext, useEffect } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import FanLetter from '../components/Main/FanLetter';
import { MemberContext } from '../store/Context';
import { getLettersThunk } from '../store/fanLetters';
import { RootState, useAppSelector, useThunkDispatch } from '../store';

const Main = () => {
  const { member, changeMember } = useContext(MemberContext);
  const dispatch = useThunkDispatch();
  const data = useAppSelector((state: RootState) => state.letters);

  useEffect(() => {
    dispatch(getLettersThunk());
  }, [dispatch]);

  return (
    <>
      <Header member={member} changeMember={changeMember} />
      <main>
        <MainForm member={member} />
        {!data.loading &&
          data.letters.reduce(
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
