import { ActionTypes, RegisterAction } from '../actions/register.actions';

export interface RegisterState {
  loading: boolean;
  error: string | null;
}

export const initialState: RegisterState = {
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action: RegisterAction): RegisterState => {
  switch (action.type) {
    case ActionTypes.REGISTER: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    case ActionTypes.REGISTER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};