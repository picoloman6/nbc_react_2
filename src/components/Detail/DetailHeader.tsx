import { useNavigate } from 'react-router-dom';

import { StDetailHeader, StGoBackBtn } from './DetailHeader.style';

const DetailHeader = () => {
  const navigate = useNavigate();

  const onClickGoBack = () => {
    navigate(-1);
  };

  return (
    <StDetailHeader>
      <StGoBackBtn onClick={onClickGoBack}>돌아가기</StGoBackBtn>
    </StDetailHeader>
  );
};

export default DetailHeader;
