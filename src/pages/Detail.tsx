import { useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

import DetailHeader from '../components/Detail/DetailHeader';
import DetailLetter from '../components/Detail/DetailLetter';

const Detail = () => {
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const queryId = searchParams.get('id');

  useEffect(() => {
    if (state === null) {
      alert('잘못된 경로로 접속했습니다.');
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [state, navigate]);

  console.log(queryId);

  return (
    <>
      <DetailHeader name={state.name} />
      <main>
        <DetailLetter content={state.content} />
      </main>
    </>
  );
};

export default Detail;
