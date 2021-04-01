import {Action} from '@ngrx/store';
import { IMovie } from '../interfaces/IMovie';
import * as types from './action.type';

export class loadMoviesAction implements Action
{
    readonly type = types.LOAD_MOVIES;
    constructor(){}
}

export class loadMoviesSuccessAction implements Action
{
    readonly type = types.LOAD_MOVIES_SUCCESS;
    constructor(public payload: IMovie[]){}
}


export type Actions = loadMoviesAction | loadMoviesSuccessAction
