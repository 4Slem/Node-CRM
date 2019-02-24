// import {Injectable} from "@angular/core";
// import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
// import {Observable, of} from "rxjs";
// import {Store} from "@ngrx/store";
// import {PositionsState} from "../store/reducers";
// import {catchError, filter, switchMap, take, tap} from "rxjs/operators";
// import {createPositionSuccess, getPositions} from "../store/actions";
//
// @Injectable({
//   providedIn: 'root',
// })
// export class PositionsGuard implements CanActivate {
//   constructor(private store: Store<PositionsState>) {}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     return this.checkStore().pipe(
//       switchMap(() => of(true)),
//       catchError(() => of(false))
//     );
//   }
//
//   checkStore(): Observable<boolean> {
//     return this.store.select(getPositionsLoading).pipe(
//       tap(loaded => {
//         if (!loaded) {
//           this.store.dispatch(new getPositions())
//         }
//       }),
//       filter(loaded => loaded),
//       take(1)
//     )
//   }
// }