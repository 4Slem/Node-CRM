import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSkills from '../reducers/index';
import { Skill } from '../../models/skill';


export const selectSkillsState = createFeatureSelector<fromSkills.SkillsState>('skills');

export const selectSkills = createSelector(selectSkillsState, (state: fromSkills.SkillsState): Skill[] => {
  return Object.keys(state.entities).map((item): Skill => state.entities[item]);
});

export const selectLoading = createSelector(selectSkillsState, (state: fromSkills.SkillsState): boolean => {
  return state.loading;
});

export const selectError = createSelector(selectSkillsState, (state: fromSkills.SkillsState): string => {
  return state.error;
});