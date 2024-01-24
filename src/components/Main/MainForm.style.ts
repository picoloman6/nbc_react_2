import { styled } from '@stitches/react';

export const StForm = styled('form', {
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  width: '30rem',
  height: '17rem',
  background: 'Violet',
  margin: '0 auto',
  padding: '1rem'
});

export const StFormTitle = styled('h3', {
  fontSize: '1.5rem',
  margin: '0 auto'
});

export const StFormInput = styled('input', {
  height: '2rem'
});

export const StFormTextArea = styled('textarea', {
  height: '4rem',
  resize: 'none'
});

export const StFormBtn = styled('button', {
  width: '4rem',
  height: '2rem',
  margin: '0 auto'
});
