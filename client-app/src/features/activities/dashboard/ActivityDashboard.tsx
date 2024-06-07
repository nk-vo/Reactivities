import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilter from "./ActivityFilter";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const {loadActivities, activitiesRegistry} = activityStore;

  useEffect(() => {
    if (activitiesRegistry.size === 0) loadActivities();
  }, [loadActivities, activitiesRegistry.size])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <Grid>
      <Grid.Column width='10'>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width='6'>
        <ActivityFilter />
      </Grid.Column>
    </Grid>
  )
})