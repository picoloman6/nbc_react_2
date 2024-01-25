import { ReactElement, useState, useRef, useContext } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import FanLetter from '../components/Main/FanLetter';
import { MemberContext } from '../store/Context';
import { LetterTypes } from '../types/mainTypes';

const dummy: LetterTypes[] = [
  {
    id: 1,
    member: '카리나',
    name: '짱짱맨',
    content: '카리나팬입니다1111111111.',
    dateTime: new Date().getTime()
  },
  {
    id: 2,
    member: '윈터',
    name: '짱짱맨',
    content: '윈터팬입니다111111111111111.',
    dateTime: new Date().getTime()
  },
  {
    id: 3,
    member: '닝닝',
    name: '짱짱맨',
    content: '닝닝팬입니다11111111111111.',
    dateTime: new Date().getTime()
  },
  {
    id: 4,
    member: '지젤',
    name: '짱짱맨',
    content: '지젤팬입니다111111111111111111111111111.',
    dateTime: new Date().getTime()
  },
  {
    id: 5,
    member: '카리나',
    name: '짱짱맨',
    content: '지젤팬입니다111111111111111111111111111.',
    dateTime: new Date().getTime()
  }
];

const Main = () => {
  const { member, changeMember } = useContext(MemberContext);
  const [letters, setLetters] = useState<LetterTypes[]>(dummy);
  const id = useRef(letters[letters.length - 1].id);

  const addLetters = (input: { name: string; content: string }) => {
    const newLetter: LetterTypes = {
      id: ++id.current,
      member,
      dateTime: new Date().getTime(),
      ...input
    };
    setLetters((prev) => [...prev, newLetter]);
  };

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
