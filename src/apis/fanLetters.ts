import {
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  collection,
  orderBy,
  doc
} from 'firebase/firestore/lite';

import db from './firestore';
import { LetterInputTypes, LetterTypes } from '../types/mainTypes';

export const getFanLetters = async () => {
  const comment = query(
    collection(db, 'fan-letters'),
    orderBy('dateTime', 'desc')
  );
  const res = await getDocs(comment);
  const data = res.docs.map((v) => {
    const tmp = v.data();
    tmp.id = v.id;
    return tmp;
  }) as LetterTypes[];

  return data;
};

export const postFanLetters = async (input: LetterInputTypes) => {
  try {
    const letter = { ...input, dateTime: new Date().getTime() };
    await addDoc(collection(db, 'fan-letters'), letter);
  } catch (e) {
    console.log(e);
  }
};

export const deleteFanLetter = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'fan-letters', id));
  } catch (e) {
    console.log(e);
  }
};

export const updateFanLetter = async (id: string, content: string) => {
  try {
    await updateDoc(doc(db, 'fan-letters', id), {
      content
    });
  } catch (e) {
    console.log(e);
  }
};
