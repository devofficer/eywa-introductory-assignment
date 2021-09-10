import { extendObservable } from 'mobx';
import { TokenModel } from '../models';
import { TokenActions } from '../actions';

class TodoStore {
  constructor() {
    extendObservable(this, {
      ...TokenModel(),
      ...TokenActions(this)
    });
  }
}

export default new TodoStore();
