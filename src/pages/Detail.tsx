import { useSearchParams } from 'react-router-dom';

const Detail = () => {
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get('id');
  console.log(queryId);
  return <div>Detail</div>;
};

export default Detail;
