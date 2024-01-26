import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  Action,
  ActionType,
  createAsyncAction,
  createReducer
} from 'typesafe-actions';

import { LetterTypes } from '../types/mainTypes';
import { RootState } from '.';
import { getFanLetters } from '../apis/fanLetters';

const GET_DATA = 'fanLetters/GET_DATA';
const GET_DATA_SUCCESS = 'fanLetters/GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'fanLetters/GET_DATA_FAILURE';

const getDataAsync = createAsyncAction(
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
)<undefined, LetterTypes[], Error | unknown>();

interface LettersStateTypes {
  loading: boolean;
  err: Error | null;
  letters: LetterTypes[];
}

type ActionTypes = ActionType<typeof getDataAsync>;

type getLettersThunkType = ThunkAction<
  void,
  RootState,
  null,
  ActionType<typeof getDataAsync>
>;

export const getLettersThunk =
  (): getLettersThunkType =>
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
