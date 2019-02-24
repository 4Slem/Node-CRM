import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLogin from './login.reducer';
import * as fromRegister from './register.reducer';

export interface AuthState {
  login: fromLogin.LoginState,
  register: fromRegister.RegisterState,
}

export const reducers: ActionReducerMap<AuthState> = {
  login: fromLogin.reducer,
  register: fromRegister.reducer,
};

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getLoginState = createSelector(getAuthState, (state: AuthState): fromLogin.LoginState => state.login);
export const getRegisterState = createSelector(getAuthState, (state: AuthState): fromRegister.RegisterState => state.register);