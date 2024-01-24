import { StSelectWrapper, StSelectBtnWrapper } from './SelectArea.style';

interface SelectBtn {
  member: '카리나' | '윈터' | '닝닝' | '지젤';
  selected: boolean;
}

const SelectBtn = ({ member, selected }: SelectBtn) => {
  return (
    <StSelectBtnWrapper selected={selected}>
      <span>{member}</span>
    </StSelectBtnWrapper>
  );
};

const SelectArea = () => {
  type MembersType = ['카리나', '윈터', '닝닝', '지젤'];
  const members: MembersType = ['카리나', '윈터', '닝닝', '지젤'];

  return (
    <StSelectWrapper>
      {members.map((v) => (
        <SelectBtn member={v} key={v} selected={v === '카리나'} />
      ))}
    </StSelectWrapper>
  );
};

export default SelectArea;
