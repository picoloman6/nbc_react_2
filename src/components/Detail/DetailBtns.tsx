import { StDetailBtnWrapper, StDetailBtn } from './DetailBtns.style';

interface DetailBtnsPropsTypes {
  update: boolean;
  onClickChange: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
}

const DetailBtns = ({
  update,
  onClickChange,
  onClickUpdate,
  onClickDelete
}: DetailBtnsPropsTypes) => {
  return (
    <StDetailBtnWrapper>
      {update ? (
        <StDetailBtn onClick={onClickUpdate}>확인</StDetailBtn>
      ) : (
        <StDetailBtn onClick={onClickChange}>수정</StDetailBtn>
      )}
      {update ? (
        <StDetailBtn onClick={onClickChange}>취소</StDetailBtn>
      ) : (
        <StDetailBtn onClick={onClickDelete}>삭제</StDetailBtn>
      )}
    </StDetailBtnWrapper>
  );
};

export default DetailBtns;
