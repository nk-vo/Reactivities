import { Button, Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {
  const { userStore: { isLoggedIn, user, logout } } = useStore();
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to='/activities' name='Activities' />
        <Menu.Item as={NavLink} to='/errors' name='Errors' />
        <Menu.Item>
          <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
        </Menu.Item>
        {isLoggedIn ? (
          <Menu.Item position='right'>
            <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
            <Dropdown pointing='top left' text={user?.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to={`/profile/${user?.username}`} text='My Profile' icon='user' />
                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        ) : (
          <Menu.Item position='right'>
            <Button as={NavLink} to='/login' content='Login' basic inverted />
            <Button as={NavLink} to='/register' content='Register' basic inverted style={{ marginLeft: '0.5em' }} />
          </Menu.Item>
        )}
      </Container>
    </Menu>
  )
})