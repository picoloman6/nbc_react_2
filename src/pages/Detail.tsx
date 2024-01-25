import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import DetailHeader from '../components/Detail/DetailHeader';

const Detail = () => {
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get('id');
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    window.scrollTo(0, 0);
  }, [state]);

  console.log(queryId);

  return (
    <>
      <DetailHeader />
      <main></main>
    </>
  );
};

export default Detail;
