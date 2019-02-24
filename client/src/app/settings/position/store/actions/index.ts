import { Action } from '@ngrx/store';
import { Position } from '../../models/positions';

export enum ActionTypes {
  GET_POSITIONS = '[Position Component] GET_POSITIONS',
  GET_POSITIONS_SUCCESS = '[Position Component] GET_POSITIONS_SUCCESS',
  GET_POSITIONS_FAIL = '[Position Component] GET_POSITIONS_FAIL',

  GET_POSITION = '[Position Component] GET_POSITION',
  GET_POSITION_SUCCESS = '[Position Component] GET_POSITION_SUCCESS',
  GET_POSITION_FAIL = '[Position Component] GET_POSITION_FAIL',

  EDIT_POSITION = '[Position Component] EDIT_POSITION',
  EDIT_POSITION_SUCCESS = '[Position Component] EDIT_POSITION_SUCCESS',
  EDIT_POSITION_FAIL = '[Position Component] EDIT_POSITION_FAIL',

  DELETE_POSITION = '[Position Component] DELETE_POSITION',
  DELETE_POSITION_SUCCESS = '[Position Component] DELETE_POSITION_SUCCESS',
  DELETE_POSITION_FAIL = '[Position Component] DELETE_POSITION_FAIL',

  CREATE_POSITION = '[Position Component] CREATE_POSITION',
  CREATE_POSITION_SUCCESS = '[Position Component] CREATE_POSITION_SUCCESS',
  CREATE_POSITION_FAIL = '[Position Component] CREATE_POSITION_FAIL',
}

export class getPositions implements Action {
  readonly type = ActionTypes.GET_POSITIONS;
}

export class getPositionsSuccess implements Action {
  readonly type = ActionTypes.GET_POSITIONS_SUCCESS;

  constructor(public payload: Position[]) {}
}

export class getPositionsFail implements Action {
  readonly type = ActionTypes.GET_POSITIONS_FAIL;

  constructor(public payload: string) {}
}


export class getPosition implements Action {
  readonly type = ActionTypes.GET_POSITION;

  constructor(public payload: number) {}
}

export class getPositionSuccess implements Action {
  readonly type = ActionTypes.GET_POSITION_SUCCESS;

  constructor(public payload: Position) {}
}

export class getPositionFail implements Action {
  readonly type = ActionTypes.GET_POSITION_FAIL;

  constructor(public payload: string) {}
}


export class editPosition implements Action {
  readonly type = ActionTypes.EDIT_POSITION;

  constructor(public payload: {data: Position, id: number | string}) {}
}

export class editPositionSuccess implements Action {
  readonly type = ActionTypes.EDIT_POSITION_SUCCESS;

  constructor(public payload: Position) {}
}

export class editPositionFail implements Action {
  readonly type = ActionTypes.EDIT_POSITION_FAIL;

  constructor(public payload: any[]) {}
}


export class deletePosition implements Action {
  readonly type = ActionTypes.DELETE_POSITION;

  constructor(public payload: string) {}
}

export class deletePositionSuccess implements Action {
  readonly type = ActionTypes.DELETE_POSITION_SUCCESS;

  constructor(public payload: number | string) {}
}

export class deletePositionFail implements Action {
  readonly type = ActionTypes.DELETE_POSITION_FAIL;

  constructor(public payload: string) {}
}


export class createPosition implements Action {
  readonly type = ActionTypes.CREATE_POSITION;

  constructor(public payload: Position) {}
}

export class createPositionSuccess implements Action {
  readonly type = ActionTypes.CREATE_POSITION_SUCCESS;

  constructor(public payload: Position) {}
}

export class createPositionFail implements Action {
  readonly type = ActionTypes.CREATE_POSITION_FAIL;

  constructor(public payload: any[]) {}
}


export type PositionsAction = getPositions | getPositionsSuccess |
  getPositionsFail | getPosition | getPositionSuccess | getPositionFail |
  editPosition | editPositionSuccess | editPositionFail | deletePosition |
  deletePositionSuccess | deletePositionFail | createPosition |
  createPositionSuccess | createPositionFail;