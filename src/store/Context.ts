import { createContext } from 'react';

import { MemberTypes } from '../types/mainTypes';

interface MemberContextTypes {
  member: MemberTypes;
  changeMember: (newMember: MemberTypes) => void;
}

export const MemberContext = createContext<MemberContextTypes>({
  member: '카리나',
  changeMember: () => {}
});
