import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPositions from '../reducers/index';
import { Position } from '../../models/positions';


export const selectPositionsState = createFeatureSelector<fromPositions.PositionsState>('positions');

export const selectPositions = createSelector(selectPositionsState, (state: fromPositions.PositionsState): Position[] => {
  return Object.keys(state.entities).map((item): Position => state.entities[item]);
});

export const selectLoading = createSelector(selectPositionsState, (state: fromPositions.PositionsState): boolean => {
  return state.loading;
});

export const selectError = createSelector(selectPositionsState, (state: fromPositions.PositionsState): string => {
  return state.error;
});