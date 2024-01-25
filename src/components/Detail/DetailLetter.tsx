import { StDetailLetterWrapper, StDetailContent } from './DetailLetter.style';

const DetailLetter = ({ content }: { content: string }) => {
  return (
    <StDetailLetterWrapper>
      <StDetailContent>{content}</StDetailContent>
    </StDetailLetterWrapper>
  );
};

export default DetailLetter;
