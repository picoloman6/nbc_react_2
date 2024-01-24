import { LetterTypes } from '../../types/mainTypes';

interface FanLetterPropsTypes {
  letter: LetterTypes;
}

const FanLetter = ({ letter }: FanLetterPropsTypes) => {
  const { name, contents, date } = letter;
  return (
    <div>
      <span>{date}</span>
      <span>{name}</span>
      <span>{contents}</span>
    </div>
  );
};

export default FanLetter;
