import {ActionTypes, LoginAction} from '../actions/login.actions';

export interface LoginState {
  isLogetIn: boolean;
  error: string | null;
  email: string;
}

export const initialState: LoginState = {
  isLogetIn: false,
  error: null,
  email: null,
};

export const reducer = (state = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return {
        ...state,
        isLogetIn: false,
        error: null,
      };
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogetIn: true,
        error: null,
        email: action.payload.email
      };
    }
    case ActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        isLogetIn: false,
        error: action.payload,
      };
    }
    case ActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLogetIn: false,
        error: null,
      }
    }
    default: {
      return state;
    }
  }
};