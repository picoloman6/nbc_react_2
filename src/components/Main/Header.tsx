import SelectArea from './SelectArea.tsx';
import { MemberTypes } from '../../types/mainTypes.ts';
import { StHeaderWrapper, StHeaderTitle } from './Header.style';

interface HeaderPropsTypes {
  selected: MemberTypes;
}

const Header = ({ selected }: HeaderPropsTypes) => {
  return (
    <StHeaderWrapper>
      <StHeaderTitle>프로젝트다</StHeaderTitle>
      <br />
      <SelectArea selected={selected} />
    </StHeaderWrapper>
  );
};

export default Header;
