import db from './firestore';
import { getDocs, query, collection, orderBy } from 'firebase/firestore/lite';

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
