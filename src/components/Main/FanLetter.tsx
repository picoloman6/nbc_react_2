import { useNavigate } from 'react-router-dom';

import { convertDate } from '../../controllers/main';
import { LetterTypes } from '../../types/mainTypes';
import { StFanLetterWrapper, StFanLetterName } from './FanLetter.style';

interface FanLetterPropsTypes {
  letter: LetterTypes;
}

const FanLetter = ({ letter }: FanLetterPropsTypes) => {
  const navigate = useNavigate();
  const { id, name, content, dateTime } = letter;

  const handleClickDetail = () => {
    navigate(`/detail?id=${id}`, { state: letter });
  };

  return (
    <StFanLetterWrapper onClick={handleClickDetail}>
      <StFanLetterName>{name}</StFanLetterName>
      <span>{convertDate(dateTime)}</span>
      <span>
        {content.length > 35 ? `${content.slice(0, 35)}...` : content}
      </span>
    </StFanLetterWrapper>
  );
};

export default FanLetter;
