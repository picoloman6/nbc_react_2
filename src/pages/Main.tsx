import { ReactElement, useState } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import FanLetter from '../components/Main/FanLetter';
import { MemberTypes, LetterTypes } from '../types/mainTypes';

const dummy: LetterTypes[] = [
  {
    id: 1,
    member: '카리나',
    name: '짱짱맨',
    contents: '카리나팬입니다1111111111.',
    dateTime: new Date().getTime()
  },
  {
    id: 2,
    member: '윈터',
    name: '짱짱맨',
    contents: '윈터팬입니다111111111111111.',
    dateTime: new Date().getTime()
  },
  {
    id: 3,
    member: '닝닝',
    name: '짱짱맨',
    contents: '닝닝팬입니다11111111111111.',
    dateTime: new Date().getTime()
  },
  {
    id: 4,
    member: '지젤',
    name: '짱짱맨',
    contents: '지젤팬입니다111111111111111111111111111.',
    dateTime: new Date().getTime()
  },
  {
    id: 5,
    member: '카리나',
    name: '짱짱맨',
    contents: '지젤팬입니다111111111111111111111111111.',
    dateTime: new Date().getTime()
  }
];

const Main = () => {
  const [member, setMember] = useState<MemberTypes>('카리나');
  const [letters] = useState<LetterTypes[]>(dummy);

  const changeMember = (newMember: MemberTypes) => {
    setMember(newMember);
  };

  return (
    <>
      <Header member={member} changeMember={changeMember} />
      <main>
        <MainForm />
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
