import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { OrganisationsService } from '../../services/organisations.service';
import { Organisation } from '../../models/organisation';
import { loadOrganisationSuccessAction, loadOrganisationErrorAction, loadOrganisationAction } from './organisations.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class OrganisationsEffect {
  constructor(
    private actions$: Actions,
    private organisationsService: OrganisationsService
  ) {}

  @Effect()
  loadOrganisations = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadOrganisationAction),
        switchMap(() =>
            this.organisationsService.getOrganisationsData().pipe(
                map((organisations: Organisation[]) => {
                    return loadOrganisationSuccessAction({
                        organisations,
                        isRetrievingData: false
                    });
                }),
                catchError((response: HttpErrorResponse) => {
                    return of(loadOrganisationErrorAction({
                        isRetrievingData: false,
                        error: response.error
                    }));
                })
            )
        )
    );
  });
}
