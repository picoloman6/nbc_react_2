export type MemberTypes = '카리나' | '윈터' | '닝닝' | '지젤';

export interface MemberStateTypes {
  member: MemberTypes;
  changeMember: (member: MemberTypes) => void;
}

export interface LetterTypes {
  id: number;
  member: MemberTypes;
  name: string;
  contents: string;
  dateTime: number;
}
