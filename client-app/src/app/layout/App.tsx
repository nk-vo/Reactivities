import { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'
import { Activity } from '../models/Activity'
import NavBar from './NavBar'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response)
        setActivities(response.data)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <List>
        {activities.map(activity => {
          return (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          )
        })}
      </List>
    </div>
  )
}

export default App
