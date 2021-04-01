import { DataService } from '../services/data.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mergeMap, map} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import * as types from './action.type';
import * as MoviesActions from './movies.actions';

import { Observable } from "rxjs";

export class MoviesEffects
{
    constructor(private service: DataService,
        private actions$: Actions){}

    @Effect() loadMovies$: Observable<Action> = this.actions$.pipe(
        ofType<MoviesActions.loadMoviesAction>(types.LOAD_MOVIES),
        mergeMap(() =>
            this.service.getAllMovies().pipe(map(Movies =>
                new MoviesActions.loadMoviesSuccessAction(Movies)))
        )
    )
}
