import { StSelectWrapper, StSelectBtnWrapper } from './SelectArea.style';

const SelectBtn = ({ member }: { member: string }) => {
  return (
    <StSelectBtnWrapper>
      <span>{member}</span>
    </StSelectBtnWrapper>
  );
};

const SelectArea = () => {
  const members: string[] = ['카리나', '윈터', '닝닝', '지젤'];
  return (
    <StSelectWrapper>
      {members.map((v, i) => (
        <SelectBtn member={v} key={i} />
      ))}
    </StSelectWrapper>
  );
};

export default SelectArea;
