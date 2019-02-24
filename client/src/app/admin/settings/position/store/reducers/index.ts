import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ActionTypes, PositionsAction } from '../actions';
import { Position } from '../../models/positions';


export interface PositionsState extends EntityState<Position> {
  loading: boolean;
  deletePending: boolean;
  createPending: boolean;
  editPending: boolean;
  error: string;
  deleteError: string;
  createErrors: any[];
  editErrors: any[];
  loaded: boolean;
  // position: Position | null,
}

const adapter: EntityAdapter<Position> = createEntityAdapter<Position>({
  selectId: state => state._id,
  sortComparer: (dataA, dataB) => dataA.name.localeCompare(dataB.name),
});

const initialState: PositionsState = adapter.getInitialState({
  loading: false,
  deletePending: false,
  createPending: false,
  editPending: false,
  error: null,
  deleteError: null,
  createErrors: [],
  editErrors: [],
  loaded: false,
  // position: null,
});

export const reducer = (state = initialState, action: PositionsAction): PositionsState => {
  switch (action.type) {
    case ActionTypes.GET_POSITIONS: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionTypes.GET_POSITIONS_SUCCESS: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        error: null,
        loaded: true,
      });
      // return {
      //   ...state,
      // }
    }
    case ActionTypes.GET_POSITIONS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case ActionTypes.DELETE_POSITION: {
      return {
        ...state,
        deletePending: true,
        deleteError: null,
      };
    }
    case ActionTypes.DELETE_POSITION_SUCCESS: {
      const newState = {
        ...state,
        deletePending: false,
        deleteError: null,
      };
      return adapter.removeOne(<string>action.payload, newState);
    }
    case ActionTypes.DELETE_POSITION_FAIL: {
      return {
        ...state,
        deletePending: false,
        deleteError: action.payload,
      };
    }
    case ActionTypes.CREATE_POSITION: {
      return {
        ...state,
        createPending: true,
        createErrors: []
      };
    }
    case ActionTypes.CREATE_POSITION_SUCCESS: {
      return adapter.addOne(action.payload, {
        ...state,
        createPending: false,
        createErrors: [],
      });
    }
    case ActionTypes.CREATE_POSITION_FAIL: {
      return {
        ...state,
        createPending: false,
        createErrors: action.payload
      }
    }
    case ActionTypes.EDIT_POSITION: {
      return {
        ...state,
        editPending: true,
        editErrors: [],
      };
    }
    case ActionTypes.EDIT_POSITION_SUCCESS: {
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
    case ActionTypes.EDIT_POSITION_FAIL: {
      return {
        ...state,
        editPending: false,
        editErrors: action.payload,
      };
    }
    // case ActionTypes.GET_POSITION: {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   };
    // }
    // case ActionTypes.GET_POSITION_SUCCESS: {
    //   return {
    //     ...state,
    //     loading: false,
    //     position: action.payload,
    //     error: null,
    //   }
    // }
    // case ActionTypes.GET_POSITION_FAIL: {
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