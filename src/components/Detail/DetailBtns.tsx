import { ErrMsgTypes } from '../../types/MainTypes';
import { StErrMsg } from '../Main/MainForm.style';
import { StDetailBtnWrapper, StDetailBtn } from './DetailBtns.style';

interface DetailBtnsPropsTypes {
  isUpdate: boolean;
  errMsg: ErrMsgTypes;
  changeUpdate: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
}

const DetailBtns = ({
  isUpdate,
  errMsg,
  changeUpdate,
  onClickUpdate,
  onClickDelete
}: DetailBtnsPropsTypes) => {
  return (
    <StDetailBtnWrapper>
      {isUpdate ? (
        <>
          <StDetailBtn onClick={onClickUpdate}>확인</StDetailBtn>
          <StDetailBtn onClick={changeUpdate}>취소</StDetailBtn>
        </>
      ) : (
        <>
          <StDetailBtn onClick={changeUpdate}>수정</StDetailBtn>
          <StDetailBtn onClick={onClickDelete}>삭제</StDetailBtn>
        </>
      )}
      <StErrMsg>{errMsg.msg}</StErrMsg>
    </StDetailBtnWrapper>
  );
};

export default DetailBtns;
