import * as moviesActions from './movies.actions';
import * as types from './action.type';
import { AppState } from './app.state';

export const initialState: AppState =
{
    movies: []
}

export function MovieReducer(state = initialState,
  action: moviesActions.Actions)
{
    switch(action.type)
    {
        case types.LOAD_MOVIES_SUCCESS:
        {
            return {state, movies: action.payload}
        }
        default:
            return state;
    }
}
