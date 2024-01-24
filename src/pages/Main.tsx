import { useState } from 'react';

import Header from '../components/Main/Header';
import MainForm from '../components/Main/MainForm';
import { MemberTypes } from '../types/mainTypes';

const Main = () => {
  const [member, setMember] = useState<MemberTypes>('지젤');

  const changeMember = (newMember: MemberTypes) => {
    setMember(newMember);
  };

  return (
    <>
      <Header member={member} changeMember={changeMember} />
      <MainForm />
    </>
  );
};

export default Main;
