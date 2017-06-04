import {autorun, observable} from 'mobx';

class TodoStore {
  todos = observable(["buy milk", "buy eggs"])
  filter = observable('')
}
var store = new TodoStore()
window.store = store;

export default store
