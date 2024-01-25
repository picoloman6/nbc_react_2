import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { MemberContext } from './store/Context';
import { MemberTypes, LetterTypes } from './types/mainTypes';
import './index.css';

const dummy: LetterTypes[] = [
  {
    id: 1,
    member: '카리나',
    name: '짱짱맨',
    content:
      '카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.카리나팬입니다1111111111.',
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

const App = () => {
  const [member, setMember] = useState<MemberTypes>('카리나');
  const [letters, setLetters] = useState<LetterTypes[]>(dummy);
  const id = useRef(letters[letters.length - 1].id);

  const changeMember = (newMember: MemberTypes) => {
    setMember(() => newMember);
  };

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
      <BrowserRouter>
        <MemberContext.Provider
          value={{ member, changeMember, letters, addLetters }}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </MemberContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
