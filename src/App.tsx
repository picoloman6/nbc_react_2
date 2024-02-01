import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { MemberTypes } from './types/mainTypes';
import './index.css';

const Detail = React.lazy(() => import('./pages/Detail'));

const App = () => {
  const [member, setMember] = useState<MemberTypes>('카리나');

  const changeMember = (newMember: MemberTypes) => {
    setMember(() => newMember);
  };

  return (
    <Router>
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
    </Router>
  );
};

export default App;
