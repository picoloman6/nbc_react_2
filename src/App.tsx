import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { MemberTypes } from './types/mainTypes';
import './index.css';

const App = () => {
  const [member, setMember] = useState<MemberTypes>('카리나');

  const changeMember = (newMember: MemberTypes) => {
    setMember(() => newMember);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Main member={member} changeMember={changeMember} />}
          />
          <Route path='/detail' element={<Detail />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
