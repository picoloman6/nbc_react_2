import {
  StDetailLetterWrapper,
  StDetailContent,
  StDetailBtnWrapper,
  StDetailBtn
} from './DetailLetter.style';

const DetailLetter = ({ content }: { content: string }) => {
  return (
    <>
      <StDetailLetterWrapper>
        <StDetailContent>{content}</StDetailContent>
      </StDetailLetterWrapper>
      <StDetailBtnWrapper>
        <StDetailBtn>수정</StDetailBtn>
        <StDetailBtn>삭제</StDetailBtn>
      </StDetailBtnWrapper>
    </>
  );
};

export default DetailLetter;
