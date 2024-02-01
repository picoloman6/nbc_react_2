import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useThunkDispatch } from '../store';
import { deleteFanLetter, updateFanLetter } from '../apis/fanLetters';
import { getLettersThunk } from '../store/fanLetters';
import DetailHeader from '../components/Detail/DetailHeader';
import DetailLetter from '../components/Detail/DetailLetter';
import DetailUpdateArea from '../components/Detail/DetailUpdateArea';
import DetailBtns from '../components/Detail/Detailbtns';
import { letterLengthLimit } from '../constants';

const Detail = () => {
  const dipatch = useThunkDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [update, setUpdate] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(state.content);
  const [errMsg, setErrMsg] = useState<string>('');

  const onClickChange = () => {
    setUpdate((prev) => !prev);
  };

  const onChangeNewContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(() => e.target.value);
  };

  const onClickUpdate = async () => {
    const { min, max } = letterLengthLimit;
    if (state.content === newContent) {
      setErrMsg(() => '수정된 내용이 없습니다.');
      return;
    }

    if (newContent.length < min || newContent.length > max) {
      setErrMsg(() => `${min}자 이상 ${max}자 이하로 입력하세요.`);
      return;
    }

    await updateFanLetter(state.id, newContent);
    dipatch(getLettersThunk());
    state.content = newContent;
    setUpdate(() => false);
    setErrMsg(() => '');
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
      {update ? (
        <DetailUpdateArea
          content={newContent}
          onChangeNewContent={onChangeNewContent}
        />
      ) : (
        <DetailLetter content={state.content} />
      )}
      <DetailBtns
        update={update}
        errMsg={errMsg}
        onClickChange={onClickChange}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
      />
    </>
  );
};

export default Detail;
