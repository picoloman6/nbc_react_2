export type MemberTypes = '카리나' | '윈터' | '닝닝' | '지젤';

export interface MemberStateTypes {
  member: MemberTypes;
  changeMember: (member: MemberTypes) => void;
}

export interface LetterInputTypes {
  name: string;
  content: string;
  member: string;
}

export interface LetterTypes extends LetterInputTypes {
  id: string;
  dateTime: number;
}
