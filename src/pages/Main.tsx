import { useState } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import { MemberTypes } from '../types/mainTypes';

const Main = () => {
  const [selected] = useState<MemberTypes>('지젤');
  return (
    <>
      <Header selected={selected} />
      <MainForm />
    </>
  );
};

export default Main;
