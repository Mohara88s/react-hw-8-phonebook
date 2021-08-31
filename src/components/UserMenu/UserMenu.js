import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const mail = useSelector(authSelectors.getUserMail);
  return (
    <div>
      <p className={styles.mail}>{mail}</p>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
}
