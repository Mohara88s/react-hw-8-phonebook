import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import { Button } from 'react-bootstrap';

export default function UserMenu() {
  const dispatch = useDispatch();
  const mail = useSelector(authSelectors.getUserMail);
  return (
    <div>
      <p className={styles.mail}>{mail}</p>
      <Button
        variant="light"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
