import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Menus } from '../../interfaces/menu';
import { Expers } from '../../interfaces/expers';
import { WorkItems } from '../../interfaces/work-items';

@Injectable({
    providedIn: 'root',
})
export class ApidataService {
    constructor(private http: HttpClient) {}

    public getMenu() {
        return this.http
            .get<Menus[]>('../../assets/data/menu.json')
            .pipe(catchError(this.handleError));
    }

    public getExpers() {
        return this.http
            .get<Expers[]>('../../assets/data/exper.json')
            .pipe(catchError(this.handleError));
    }

    public getWorks() {
        return this.http
            .get<WorkItems[]>('../../assets/data/workitems.json')
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}
