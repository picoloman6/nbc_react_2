import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { id, name, content, dateTime } = letter;

  const onClickDetail = (e: React.MouseEvent<HTMLLIElement>) => {
    const { tagName } = e.target as Element;

    if (tagName !== 'BUTTON') {
      navigate(`/detail?id=${id}`, { state: letter });
    }
  };

  return (
    <StFanLetterWrapper onClick={onClickDetail}>
      <StFanLetterName>{name}</StFanLetterName>
      <span>{convertDate(dateTime)}</span>
      <span>
        {content.length > 35 ? `${content.slice(0, 35)}...` : content}
      </span>
    </StFanLetterWrapper>
  );
};

export default FanLetter;
