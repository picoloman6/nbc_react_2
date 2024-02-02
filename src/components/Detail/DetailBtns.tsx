import { StErrMsg } from '../Main/MainForm.style';
import { StDetailBtnWrapper, StDetailBtn } from './DetailBtns.style';

interface DetailBtnsPropsTypes {
  update: boolean;
  errMsg: string;
  onClickChange: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
}

const DetailBtns = ({
  update,
  errMsg,
  onClickChange,
  onClickUpdate,
  onClickDelete
}: DetailBtnsPropsTypes) => {
  return (
    <StDetailBtnWrapper>
      {update ? (
        <>
          <StDetailBtn onClick={onClickUpdate}>확인</StDetailBtn>
          <StDetailBtn onClick={onClickChange}>취소</StDetailBtn>
        </>
      ) : (
        <>
          <StDetailBtn onClick={onClickChange}>수정</StDetailBtn>
          <StDetailBtn onClick={onClickDelete}>삭제</StDetailBtn>
        </>
      )}
      <StErrMsg>{errMsg}</StErrMsg>
    </StDetailBtnWrapper>
  );
};

export default DetailBtns;
