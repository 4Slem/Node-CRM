import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ActionTypes, EmployeeAction } from '../actions/index';
import { Employee } from '../../models/employee';


export interface AllEmployeeState extends EntityState<Employee> {
  loading: boolean;
  deletePending: boolean;
  createPending: boolean;
  editPending: boolean;
  error: string;
  deleteError: string;
  createErrors: any[];
  editErrors: any[];
  loaded: boolean;
}

const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>({
  selectId: state => state._id,
  sortComparer: (dataA, dataB) => dataA.name.localeCompare(dataB.name),
});

const initialState: AllEmployeeState = adapter.getInitialState({
  loading: false,
  deletePending: false,
  createPending: false,
  editPending: false,
  error: null,
  deleteError: null,
  createErrors: [],
  editErrors: [],
  loaded: false,
});

export const reducer = (state = initialState, action: EmployeeAction): AllEmployeeState => {
  switch (action.type) {
    case ActionTypes.GET_ALL_EMPLOYEE: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionTypes.GET_ALL_EMPLOYEE_SUCCESS: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        error: null,
        loaded: true,
      });
    }
    case ActionTypes.GET_ALL_EMPLOYEE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case ActionTypes.DELETE_EMPLOYEE: {
      return {
        ...state,
        deletePending: true,
        deleteError: null,
      };
    }
    case ActionTypes.DELETE_EMPLOYEE_SUCCESS: {
      const newState = {
        ...state,
        deletePending: false,
        deleteError: null,
      };
      return adapter.removeOne(<string>action.payload, newState);
    }
    case ActionTypes.DELETE_EMPLOYEE_FAIL: {
      return {
        ...state,
        deletePending: false,
        deleteError: action.payload,
      };
    }
    case ActionTypes.CREATE_EMPLOYEE: {
      return {
        ...state,
        createPending: true,
        createErrors: []
      };
    }
    case ActionTypes.CREATE_EMPLOYEE_SUCCESS: {
      return adapter.addOne(action.payload, {
        ...state,
        createPending: false,
        createErrors: [],
      });
    }
    case ActionTypes.CREATE_EMPLOYEE_FAIL: {
      return {
        ...state,
        createPending: false,
        createErrors: action.payload
      }
    }
    case ActionTypes.EDIT_EMPLOYEE: {
      return {
        ...state,
        editPending: true,
        editErrors: [],
      };
    }
    case ActionTypes.EDIT_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        editPending: false,
        editErrors: [],
        entities: {
          ...state.entities,
          [action.payload._id]: action.payload
        }
      };
    }
    case ActionTypes.EDIT_EMPLOYEE_FAIL: {
      return {
        ...state,
        editPending: false,
        editErrors: action.payload,
      };
    }
    // case ActionTypes.GET_EMPLOYEE: {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   };
    // }
    // case ActionTypes.GET_EMPLOYEE_SUCCESS: {
    //   return {
    //     ...state,
    //     loading: false,
    //     EMPLOYEE: action.payload,
    //     error: null,
    //   }
    // }
    // case ActionTypes.GET_EMPLOYEE_FAIL: {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload
    //   }
    // }
    default: {
      return state;
    }
  }
};