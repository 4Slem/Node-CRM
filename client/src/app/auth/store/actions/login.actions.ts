import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum ActionTypes {
  LOGIN = '[Auth Component] LOGIN',
  LOGIN_SUCCESS = '[Auth Component] LOGIN_SUCCESS',
  LOGIN_FAIL = '[Auth Component] LOGIN_FAIL',
  LOGOUT = '[Auth Component] LOGOUT',
  LOGOUT_SUCCESS = '[Auth Component] LOGOUT_SUCCESS',
  LOGOUT_FAIL = '[Auth Component] LOGOUT_FAIL',
}

export class Login implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = ActionTypes.LOGIN_FAIL;
  constructor(public payload: string) {}
}

export class LogOut implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export class LogOutSuccess implements Action {
  readonly type = ActionTypes.LOGOUT_SUCCESS;
}

export class LogOutFail implements Action {
  readonly type = ActionTypes.LOGOUT_FAIL;
}

export type LoginAction = Login | LoginSuccess | LoginFail | LogOut | LogOutSuccess | LogOutFail;