import { LetterTypes } from '../../types/mainTypes';
import { StFanLetterWrapper, StFanLetterName } from './FanLetter.style';

interface FanLetterPropsTypes {
  letter: LetterTypes;
}

const convertDate = (dateTime: number) => {
  const dateObj = new Date(dateTime);
  const year = dateObj.getFullYear();
  const mon = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const min = dateObj.getMinutes();

  return `${year}년 ${mon}월 ${date}일 ${hour}시 ${min}분`;
};

const FanLetter = ({ letter }: FanLetterPropsTypes) => {
  const { name, content, dateTime } = letter;

  return (
    <StFanLetterWrapper>
      <StFanLetterName>{name}</StFanLetterName>
      <span>{convertDate(dateTime)}</span>
      <span>{content}</span>
    </StFanLetterWrapper>
  );
};

export default FanLetter;
