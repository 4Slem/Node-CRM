import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { createPosition, deletePosition, editPosition, getPositions } from './store/actions';
import { selectPositions, selectLoading, selectError } from './store/selectors';
import { Position } from './models/positions';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
})
export class PositionComponent implements OnInit {
  positions$: Observable<Position[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.positions$ = this.store.pipe(select(selectPositions));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));
    this.store.dispatch(new getPositions())
  }

  get() {
    this.store.dispatch(new createPosition({_id: '13', name: 'fr23ontEnd'}));
  }

  edit(data) {
    const d: Position = {_id: data._id, name: '5678976'};
    this.store.dispatch(new editPosition({data: d, id: d._id}));
  }

  delete(id) {
    this.store.dispatch(new deletePosition(id));
  }
}
