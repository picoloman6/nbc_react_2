import { useNavigate } from 'react-router-dom';

import { useThunkDispatch } from '../../store';
import { deleteFanLetter } from '../../apis/fanLetters';
import { getLettersThunk } from '../../store/fanLetters';
import {
  StDetailLetterWrapper,
  StDetailContent,
  StDetailBtnWrapper,
  StDetailBtn
} from './DetailLetter.style';

interface DetailLetterPropsType {
  content: string;
  id: string;
}

const DetailLetter = ({ content, id }: DetailLetterPropsType) => {
  const navigate = useNavigate();
  const dipatch = useThunkDispatch();
  const onClickDelete = async (id: string) => {
    await deleteFanLetter(id);
    dipatch(getLettersThunk());
    navigate(-1);
  };

  return (
    <>
      <StDetailLetterWrapper>
        <StDetailContent>{content}</StDetailContent>
      </StDetailLetterWrapper>
      <StDetailBtnWrapper>
        <StDetailBtn>수정</StDetailBtn>
        <StDetailBtn onClick={() => onClickDelete(id)}>삭제</StDetailBtn>
      </StDetailBtnWrapper>
    </>
  );
};

export default DetailLetter;
