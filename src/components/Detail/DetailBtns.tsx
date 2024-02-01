import { StDetailBtnWrapper, StDetailBtn } from './DetailBtns.style';

interface DetailBtnsPropsTypes {
  onClickChange: () => void;
  onClickDelete: () => void;
}

const DetailBtns = ({ onClickChange, onClickDelete }: DetailBtnsPropsTypes) => {
  return (
    <StDetailBtnWrapper>
      <StDetailBtn onClick={onClickChange}>수정</StDetailBtn>
      <StDetailBtn onClick={() => onClickDelete()}>삭제</StDetailBtn>
    </StDetailBtnWrapper>
  );
};

export default DetailBtns;
