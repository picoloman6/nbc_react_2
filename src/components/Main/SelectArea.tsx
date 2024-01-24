import { MemberTypes } from '../../types/mainTypes';
import { StSelectWrapper, StSelectBtnWrapper } from './SelectArea.style';

interface SelectBtnPropsTypes {
  member: MemberTypes;
  selected: boolean;
}

const SelectBtn = ({ member, selected }: SelectBtnPropsTypes) => {
  return (
    <StSelectBtnWrapper selected={selected}>
      <span>{member}</span>
    </StSelectBtnWrapper>
  );
};

const SelectArea = ({ selected }: { selected: MemberTypes }) => {
  const members: MemberTypes[] = ['카리나', '윈터', '닝닝', '지젤'];

  return (
    <StSelectWrapper>
      {members.map((v) => (
        <SelectBtn member={v} key={v} selected={v === selected} />
      ))}
    </StSelectWrapper>
  );
};

export default SelectArea;
