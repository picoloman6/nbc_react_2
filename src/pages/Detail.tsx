import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useThunkDispatch } from '../store';
import { deleteFanLetter } from '../apis/fanLetters';
import { getLettersThunk } from '../store/fanLetters';
import DetailHeader from '../components/Detail/DetailHeader';
import DetailLetter from '../components/Detail/DetailLetter';
import DetailUpdateArea from '../components/Detail/DetailUpdateArea';
import DetailBtns from '../components/Detail/Detailbtns';

const Detail = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const dipatch = useThunkDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const onClickChange = () => {
    setUpdate((prev) => !prev);
  };

  const onClickDelete = async () => {
    await deleteFanLetter(state.id);
    dipatch(getLettersThunk());
    navigate(-1);
  };

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
      {update ? <DetailUpdateArea /> : <DetailLetter content={state.content} />}
      <DetailBtns onClickChange={onClickChange} onClickDelete={onClickDelete} />
    </>
  );
};

export default Detail;
