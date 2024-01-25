import { createContext } from 'react';

import { MemberTypes, LetterTypes } from '../types/mainTypes';

interface MemberContextTypes {
  member: MemberTypes;
  changeMember: (newMember: MemberTypes) => void;
  letters: LetterTypes[];
  addLetters: (input: { name: string; content: string }) => void;
}

export const MemberContext = createContext<MemberContextTypes>({
  member: '카리나',
  changeMember: () => {},
  letters: [],
  addLetters: () => {}
});
