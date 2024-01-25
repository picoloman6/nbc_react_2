import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { MemberContext } from './store/Context';
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
        <MemberContext.Provider value={{ member, changeMember }}>
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
