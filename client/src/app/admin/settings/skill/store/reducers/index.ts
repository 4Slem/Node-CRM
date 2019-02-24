import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ActionTypes, SkillAction } from '../actions/index';
import { Skill } from '../../models/skill';


export interface SkillsState extends EntityState<Skill> {
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

const adapter: EntityAdapter<Skill> = createEntityAdapter<Skill>({
  selectId: state => state._id,
  sortComparer: (dataA, dataB) => dataA.name.localeCompare(dataB.name),
});

const initialState: SkillsState = adapter.getInitialState({
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

export const reducer = (state = initialState, action: SkillAction): SkillsState => {
  switch (action.type) {
    case ActionTypes.GET_SKILLS: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionTypes.GET_SKILLS_SUCCESS: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        error: null,
        loaded: true,
      });
    }
    case ActionTypes.GET_SKILLS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case ActionTypes.DELETE_SKILL: {
      return {
        ...state,
        deletePending: true,
        deleteError: null,
      };
    }
    case ActionTypes.DELETE_SKILL_SUCCESS: {
      const newState = {
        ...state,
        deletePending: false,
        deleteError: null,
      };
      return adapter.removeOne(<string>action.payload, newState);
    }
    case ActionTypes.DELETE_SKILL_FAIL: {
      return {
        ...state,
        deletePending: false,
        deleteError: action.payload,
      };
    }
    case ActionTypes.CREATE_SKILL: {
      return {
        ...state,
        createPending: true,
        createErrors: []
      };
    }
    case ActionTypes.CREATE_SKILL_SUCCESS: {
      return adapter.addOne(action.payload, {
        ...state,
        createPending: false,
        createErrors: [],
      });
    }
    case ActionTypes.CREATE_SKILL_FAIL: {
      return {
        ...state,
        createPending: false,
        createErrors: action.payload
      }
    }
    case ActionTypes.EDIT_SKILL: {
      return {
        ...state,
        editPending: true,
        editErrors: [],
      };
    }
    case ActionTypes.EDIT_SKILL_SUCCESS: {
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
    case ActionTypes.EDIT_SKILL_FAIL: {
      return {
        ...state,
        editPending: false,
        editErrors: action.payload,
      };
    }
    // case ActionTypes.GET_SKILL: {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   };
    // }
    // case ActionTypes.GET_SKILL_SUCCESS: {
    //   return {
    //     ...state,
    //     loading: false,
    //     SKILL: action.payload,
    //     error: null,
    //   }
    // }
    // case ActionTypes.GET_SKILL_FAIL: {
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