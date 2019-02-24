import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ActionTypes, DepartmentAction } from '../actions';
import { Department } from '../../models/department';


export interface DepartmentsState extends EntityState<Department> {
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

const adapter: EntityAdapter<Department> = createEntityAdapter<Department>({
  selectId: state => state._id,
  sortComparer: (dataA, dataB) => dataA.name.localeCompare(dataB.name),
});

const initialState: DepartmentsState = adapter.getInitialState({
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

export const reducer = (state = initialState, action: DepartmentAction): DepartmentsState => {
  switch (action.type) {
    case ActionTypes.GET_DEPARTMENTS: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionTypes.GET_DEPARTMENTS_SUCCESS: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        error: null,
        loaded: true,
      });
    }
    case ActionTypes.GET_DEPARTMENTS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case ActionTypes.DELETE_DEPARTMENT: {
      return {
        ...state,
        deletePending: true,
        deleteError: null,
      };
    }
    case ActionTypes.DELETE_DEPARTMENT_SUCCESS: {
      const newState = {
        ...state,
        deletePending: false,
        deleteError: null,
      };
      return adapter.removeOne(<string>action.payload, newState);
    }
    case ActionTypes.DELETE_DEPARTMENT_FAIL: {
      return {
        ...state,
        deletePending: false,
        deleteError: action.payload,
      };
    }
    case ActionTypes.CREATE_DEPARTMENT: {
      return {
        ...state,
        createPending: true,
        createErrors: []
      };
    }
    case ActionTypes.CREATE_DEPARTMENT_SUCCESS: {
      return adapter.addOne(action.payload, {
        ...state,
        createPending: false,
        createErrors: [],
      });
    }
    case ActionTypes.CREATE_DEPARTMENT_FAIL: {
      return {
        ...state,
        createPending: false,
        createErrors: action.payload
      }
    }
    case ActionTypes.EDIT_DEPARTMENT: {
      return {
        ...state,
        editPending: true,
        editErrors: [],
      };
    }
    case ActionTypes.EDIT_DEPARTMENT_SUCCESS: {
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
    case ActionTypes.EDIT_DEPARTMENT_FAIL: {
      return {
        ...state,
        editPending: false,
        editErrors: action.payload,
      };
    }
    // case ActionTypes.GET_DEPARTMENT: {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   };
    // }
    // case ActionTypes.GET_DEPARTMENT_SUCCESS: {
    //   return {
    //     ...state,
    //     loading: false,
    //     DEPARTMENT: action.payload,
    //     error: null,
    //   }
    // }
    // case ActionTypes.GET_DEPARTMENT_FAIL: {
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