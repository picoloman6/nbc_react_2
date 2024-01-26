import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  Action,
  ActionType,
  createAsyncAction,
  createReducer
} from 'typesafe-actions';

import { LetterInputTypes, LetterTypes } from '../types/mainTypes';
import { getFanLetters, postFanLetters } from '../apis/fanLetters';
import { RootState } from '.';
import { makeActions } from './common';

const [GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE] = makeActions(
  'fanLetters',
  'get'
);
const [POST_DATA, POST_DATA_SUCCESS, POST_DATA_FAILURE] = makeActions(
  'fanLetters',
  'post'
);

const getDataAsync = createAsyncAction(
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
)<undefined, LetterTypes[], Error | unknown>();

const postDataAsync = createAsyncAction(
  POST_DATA,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE
)<undefined, void, Error | unknown>();

interface LettersStateTypes {
  loading: boolean;
  err: Error | null;
  letters: LetterTypes[];
}

type ActionTypes = ActionType<typeof getDataAsync>;

type getLettersThunkTypes = ThunkAction<
  void,
  RootState,
  null,
  ActionType<typeof getDataAsync>
>;

type postLettersThunkTypes = ThunkAction<
  void,
  RootState,
  null,
  ActionType<typeof postDataAsync>
>;

export const getLettersThunk =
  (): getLettersThunkTypes =>
  async (dispatch: ThunkDispatch<RootState, null, Action>) => {
    const { request, success, failure } = getDataAsync;
    dispatch(request());
    try {
      const letters = (await getFanLetters()) as LetterTypes[];
      dispatch(success(letters));
    } catch (e) {
      dispatch(failure(e));
    }
  };

export const postLettersThunk =
  (input: LetterInputTypes): postLettersThunkTypes =>
  async (dispatch: ThunkDispatch<RootState, null, Action>) => {
    const { request, success, failure } = getDataAsync;
    dispatch(request());
    try {
      await postFanLetters(input);
      const letters = (await getFanLetters()) as LetterTypes[];
      dispatch(success(letters));
    } catch (e) {
      dispatch(failure(e));
    }
  };

const initState = {
  loading: false,
  err: null,
  letters: []
};

const lettersReducer = createReducer<LettersStateTypes, ActionTypes>(
  initState,
  {
    [GET_DATA]: (state) => ({
      ...state,
      loading: true
    }),
    [GET_DATA_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      letters: action.payload
    }),
    [GET_DATA_FAILURE]: (state, action) => ({
      ...state,
      loading: false,
      err: action.payload
    })
  }
);

export default lettersReducer;
