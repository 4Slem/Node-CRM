import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum ActionTypes {
  REGISTER = '[Auth Component] REGISTER',
  REGISTER_SUCCESS = '[Auth Component] REGISTER_SUCCESS',
  REGISTER_FAIL = '[Auth Component] REGISTER_FAIL',
}

export class Register implements Action {
  readonly type = ActionTypes.REGISTER;
  constructor(public payload: User) {}
}

export class RegisterSuccess implements Action {
  readonly type = ActionTypes.REGISTER_SUCCESS;
}

export class RegisterFail implements Action {
  readonly type = ActionTypes.REGISTER_FAIL;
  constructor(public payload: string) {}
}

export type RegisterAction = Register | RegisterSuccess | RegisterFail;