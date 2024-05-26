import { action, makeAutoObservable, observable } from "mobx";
import { Activity } from "../models/Activity";
import agent from "../api/agent";

export default class ActivityStore {
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  editMode = false
  loading = false
  loadingInitial = false

  constructor() {
    makeAutoObservable(this, {
      activities: observable,
      selectedActivity: observable,
      editMode: observable,
      loading: observable,
      loadingInitial: observable,
      loadActivities: action
    });
  }

  loadActivities = async () => {
    this.loadingInitial = true;
    try {
      const activities = await agent.Activities.list();
      activities.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        this.activities.push(activity);
      })
      this.loadingInitial = false;
    } catch (error) {
      console.log(error);
      this.loadingInitial = false;
    }
  }
}