import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { createPosition, deletePosition, editPosition, getPositions } from './store/actions';
import { selectPositions, selectLoading, selectError } from './store/selectors';
import { Position } from './models/positions';
import { PositionsState } from './store/reducers';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
})
export class PositionComponent implements OnInit {
  positions$: Observable<Position[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  item = {name: ''};
  @ViewChild('create') create: ElementRef;
  @ViewChild('edit') edit: ElementRef;

  constructor(private store: Store<PositionsState>) {}

  ngOnInit() {
    this.positions$ = this.store.pipe(select(selectPositions));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));

    this.store.dispatch(new getPositions())
  }

  setItem(data) {
    this.item = data;
  }

  createConfirm() {
    let data = this.create.nativeElement.value;
    if (data && data.length > 1) {
      this.store.dispatch(new createPosition({name: data}));
    }
    this.create.nativeElement.value = '';
  }

  editConfirm(data) {
    let name = this.edit.nativeElement.value;
    if (name && name.length > 1) {
      const newState = {...data, name: name};
      this.store.dispatch(new editPosition({data: newState, id: data._id}));
    }
    this.edit.nativeElement.value = this.item.name;
  }

  delete(data) {
    this.store.dispatch(new deletePosition(data._id));
  }
}
