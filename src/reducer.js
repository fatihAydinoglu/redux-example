import { fromJS } from 'immutable';

const initialState = fromJS({ filter: { genre: '', actor: '' } });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // handle fetch movies action
    case 'FETCH_MOVIES':
      return state.mergeDeep(action.payload);
    // handle set filter action
    case 'SET_FILTER':
      return state.mergeDeep({ filter: action.filter });
    default:
      return state;
  }
};

export default reducer;
