import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.menu}>
      <p>{user.email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default UserMenu;
