import { ReactElement, useContext } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import FanLetter from '../components/Main/FanLetter';
import { MemberContext } from '../store/Context';

const Main = () => {
  const { member, changeMember, letters, addLetters } =
    useContext(MemberContext);

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
