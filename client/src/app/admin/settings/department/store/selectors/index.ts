import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDepartments from '../reducers/index';
import { Department } from '../../models/department';


export const selectDepartmentsState = createFeatureSelector<fromDepartments.DepartmentsState>('department');

export const selectDepartments = createSelector(selectDepartmentsState, (state: fromDepartments.DepartmentsState): Department[] => {
  return Object.keys(state.entities).map((item): Department => state.entities[item]);
});

export const selectLoading = createSelector(selectDepartmentsState, (state: fromDepartments.DepartmentsState): boolean => {
  return state.loading;
});

export const selectError = createSelector(selectDepartmentsState, (state: fromDepartments.DepartmentsState): string => {
  return state.error;
});