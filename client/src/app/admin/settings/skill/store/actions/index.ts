import { Action } from '@ngrx/store';
import { Skill } from '../../models/skill';

export enum ActionTypes {
  GET_SKILLS = '[Skill Component] GET_SKILLS',
  GET_SKILLS_SUCCESS = '[Skill Component] GET_SKILLS_SUCCESS',
  GET_SKILLS_FAIL = '[Skill Component] GET_SKILLS_FAIL',

  GET_SKILL = '[Skill Component] GET_SKILL',
  GET_SKILL_SUCCESS = '[Skill Component] GET_SKILL_SUCCESS',
  GET_SKILL_FAIL = '[Skill Component] GET_SKILL_FAIL',

  EDIT_SKILL = '[Skill Component] EDIT_SKILL',
  EDIT_SKILL_SUCCESS = '[Skill Component] EDIT_SKILL_SUCCESS',
  EDIT_SKILL_FAIL = '[Skill Component] EDIT_SKILL_FAIL',

  DELETE_SKILL = '[Skill Component] DELETE_SKILL',
  DELETE_SKILL_SUCCESS = '[Skill Component] DELETE_SKILL_SUCCESS',
  DELETE_SKILL_FAIL = '[Skill Component] DELETE_SKILL_FAIL',

  CREATE_SKILL = '[Skill Component] CREATE_SKILL',
  CREATE_SKILL_SUCCESS = '[Skill Component] CREATE_SKILL_SUCCESS',
  CREATE_SKILL_FAIL = '[Skill Component] CREATE_SKILL_FAIL',
}

export class getSkills implements Action {
  readonly type = ActionTypes.GET_SKILLS;
}

export class getSkillsSuccess implements Action {
  readonly type = ActionTypes.GET_SKILLS_SUCCESS;

  constructor(public payload: Skill[]) {}
}

export class getSkillsFail implements Action {
  readonly type = ActionTypes.GET_SKILLS_FAIL;

  constructor(public payload: string) {}
}


export class getSkill implements Action {
  readonly type = ActionTypes.GET_SKILL;

  constructor(public payload: number) {}
}

export class getSkillSuccess implements Action {
  readonly type = ActionTypes.GET_SKILL_SUCCESS;

  constructor(public payload: Skill) {}
}

export class getSkillFail implements Action {
  readonly type = ActionTypes.GET_SKILL_FAIL;

  constructor(public payload: string) {}
}


export class editSkill implements Action {
  readonly type = ActionTypes.EDIT_SKILL;

  constructor(public payload: {data: Skill, id: number | string}) {}
}

export class editSkillSuccess implements Action {
  readonly type = ActionTypes.EDIT_SKILL_SUCCESS;

  constructor(public payload: Skill) {}
}

export class editSkillFail implements Action {
  readonly type = ActionTypes.EDIT_SKILL_FAIL;

  constructor(public payload: any[]) {}
}


export class deleteSkill implements Action {
  readonly type = ActionTypes.DELETE_SKILL;

  constructor(public payload: string) {}
}

export class deleteSkillSuccess implements Action {
  readonly type = ActionTypes.DELETE_SKILL_SUCCESS;

  constructor(public payload: number | string) {}
}

export class deleteSkillFail implements Action {
  readonly type = ActionTypes.DELETE_SKILL_FAIL;

  constructor(public payload: string) {}
}


export class createSkill implements Action {
  readonly type = ActionTypes.CREATE_SKILL;

  constructor(public payload: Skill) {}
}

export class createSkillSuccess implements Action {
  readonly type = ActionTypes.CREATE_SKILL_SUCCESS;

  constructor(public payload: Skill) {}
}

export class createSkillFail implements Action {
  readonly type = ActionTypes.CREATE_SKILL_FAIL;

  constructor(public payload: any[]) {}
}


export type SkillAction = getSkills | getSkillsSuccess |
  getSkillsFail | getSkill | getSkillSuccess | getSkillFail |
  editSkill | editSkillSuccess | editSkillFail | deleteSkill |
  deleteSkillSuccess | deleteSkillFail | createSkill |
  createSkillSuccess | createSkillFail;