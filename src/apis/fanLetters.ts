import db from './firestore';
import {
  getDocs,
  addDoc,
  query,
  collection,
  orderBy
} from 'firebase/firestore/lite';

export const getFanLetters = async () => {
  try {
    const comment = query(
      collection(db, 'fan-letters'),
      orderBy('dateTime', 'desc')
    );
    const res = await getDocs(comment);
    const data = res.docs.map((v) => {
      const tmp = v.data();
      tmp.id = v.id;
      return tmp;
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postFanLetters = async (
  letterInput: { name: string; content: string },
  member: string
) => {
  try {
    const letter = { ...letterInput, member, dateTime: new Date() };
    await addDoc(collection(db, 'fan-letters'), letter);
  } catch (e) {
    console.log(e);
  }
};
