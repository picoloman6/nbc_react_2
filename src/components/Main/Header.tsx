import SelectArea from './SelectArea.tsx';
import { MemberStateTypes } from '../../types/mainTypes.ts';
import { StHeaderWrapper, StHeaderTitle } from './Header.style';

const Header = ({ member, changeMember }: MemberStateTypes) => {
  return (
    <StHeaderWrapper>
      <StHeaderTitle>프로젝트다</StHeaderTitle>
      <br />
      <SelectArea member={member} changeMember={changeMember} />
    </StHeaderWrapper>
  );
};

export default Header;
