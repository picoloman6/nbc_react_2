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
      <label htmlFor='main-form-name'>닉네임</label>
      <StFormInput
        id='main-form-name'
        type='text'
        placeholder='이름을 입력하세요'
        autoComplete='none'
      />
      <label htmlFor='main-form-content'>내용</label>
      <StFormTextArea id='main-form-content' placeholder='내용을 입력하세요' />
      <StFormBtn> 제출</StFormBtn>
    </StForm>
  );
};

export default MainForm;
