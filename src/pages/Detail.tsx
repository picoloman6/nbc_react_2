import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import DetailHeader from '../components/Detail/DetailHeader';

const Detail = () => {
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get('id');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(queryId);

  return (
    <>
      <DetailHeader />
      <main></main>
    </>
  );
};

export default Detail;
