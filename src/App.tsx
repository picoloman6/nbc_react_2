import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { MemberTypes } from './types';
import './index.css';

const Detail = React.lazy(() => import('./pages/Detail'));

const App = () => {
  const [member, setMember] = useState<MemberTypes>('카리나');

  const changeMember = (newMember: MemberTypes) => {
    setMember(newMember);
  };

  return (
    <HashRouter>
      <React.Suspense>
        <Routes>
          <Route
            path='/'
            element={<Main member={member} changeMember={changeMember} />}
          />
          <Route path='/detail' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
