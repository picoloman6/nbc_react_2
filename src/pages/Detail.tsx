import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DetailHeader from '../components/Detail/DetailHeader';
import DetailLetter from '../components/Detail/DetailLetter';

const Detail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      alert('잘못된 경로로 접속했습니다.');
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [state, navigate]);

  return (
    <>
      <DetailHeader name={state.name} />
      <DetailLetter content={state.content} />
    </>
  );
};

export default Detail;
