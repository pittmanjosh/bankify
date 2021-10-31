import {useContext}from 'react';
import ctx from '../context';
import { NavLink } from 'react-bootstrap';
import {PAGES} from '../data/constants';
import { logout } from '../data/dal';

export default function Link({name}) {
  const {user, setUser, page, setPage} = useContext(ctx);

  const key = name.toLowerCase();
  let isActive = (page === key);

  const handle = ()=>{
    if (name === "Logout") {
      setUser('');
      setPage('home');
      logout();
    } else {
      setPage(key);
    }
  }

  const validWithUser = (user && PAGES[key].ifUser);
  const validWithoutUser = PAGES[key].ifNoUser;

  const ValidLink = (validWithUser || validWithoutUser) ? (
    <NavLink onClick={handle} active={isActive}>
      {name}
    </NavLink>
  ) : (
    null
  );

  return (
    <ValidLink/>
  )
}
