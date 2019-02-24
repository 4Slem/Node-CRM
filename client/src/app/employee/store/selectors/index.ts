import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAllEmployee from '../reducers';
import { Employee } from '../../models/employee';


export const selectAllEmployeeState = createFeatureSelector<fromAllEmployee.AllEmployeeState>('employee');

export const selectAllEmployee = createSelector(selectAllEmployeeState, (state: fromAllEmployee.AllEmployeeState): Employee[] => {
  return Object.keys(state.entities).map((item): Employee => state.entities[item]);
});

export const selectLoading = createSelector(selectAllEmployeeState, (state: fromAllEmployee.AllEmployeeState): boolean => {
  return state.loading;
});

export const selectError = createSelector(selectAllEmployeeState, (state: fromAllEmployee.AllEmployeeState): string => {
  return state.error;
});