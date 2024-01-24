import {
  StForm,
  StFormTitle,
  StFormInput,
  StFormTextArea,
  StFormBtn
} from './MainForm.style';

const MainForm = () => {
  return (
    <StForm>
      <StFormTitle>현재 멤버에게 보내고 있습니다</StFormTitle>
      <label>닉네임</label>
      <StFormInput
        type='text'
        placeholder='이름을 입력하세요'
        autoComplete='none'
      />
      <label>내용</label>
      <StFormTextArea placeholder='내용을 입력하세요' />
      <StFormBtn> 제출</StFormBtn>
    </StForm>
  );
};

export default MainForm;
