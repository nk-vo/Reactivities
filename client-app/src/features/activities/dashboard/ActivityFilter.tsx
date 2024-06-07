import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import { Header, Menu } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import Calendar from "react-calendar";

export default observer(function ActivityFilter() {
  const { activityStore } = useStore();
  const { predicate, setPredicate } = activityStore;

  return (
    <Fragment>
      <Header as='h2' content='Filters' color='teal' />
      <Menu vertical size={'large'} style={{ width: '100%', marginTop: 50 }}>
        <Header icon={'filter'} attached color='teal' content={'Filters'} />
        <Menu.Item
          content='All Activities'
          active={predicate.has('all')}
          onClick={() => setPredicate('all', 'true')}
        />
        <Menu.Item
          content="I'm going"
          active={predicate.has('isGoing')}
          onClick={() => setPredicate('isGoing', 'true')}
        />
        <Menu.Item
          content="I'm hosting"
          active={predicate.has('isHost')}
          onClick={() => setPredicate('isHost', 'true')}
        />
      </Menu>
      <Calendar />
    </Fragment>
  )
})