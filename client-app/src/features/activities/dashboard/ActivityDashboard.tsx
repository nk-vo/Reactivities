import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Button, Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from './ActivityList';
import { PagingParams } from "../../../app/models/pagination";

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry, setPagingParams, pagination } = activityStore;
    const [loadingNext ,setLoadingNext] = useState(false);

    function handdleGetNext() {
        setLoadingNext(true);
        setPagingParams( new PagingParams(pagination!.currentPage + 1));
        loadActivities().then(() => setLoadingNext(false));
    }

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activitities...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
                <Button 
                    floated='right'
                    content='More...'
                    positive
                    onClick={handdleGetNext}
                    loading={loadingNext}
                    disabled={pagination?.totalPages === pagination?.currentPage}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})