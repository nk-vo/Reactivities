import { action, makeAutoObservable, observable } from "mobx";

export default class ActivityStore {
  title = 'Hello from MobX!';

  constructor() {
    makeAutoObservable(this, {
      title: observable,
      setTitle: action
    });
  }

  setTitle = (title? : string) => {
    this.title = this.title + '!';
  }
}