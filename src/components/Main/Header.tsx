import { StHeaderWrapper, StHeaderTitle } from './Header.style';
import SelectArea from './SelectArea.tsx';

const Header = () => {
  return (
    <StHeaderWrapper>
      <StHeaderTitle>프로젝트다</StHeaderTitle>
      <br />
      <SelectArea />
    </StHeaderWrapper>
  );
};

export default Header;
