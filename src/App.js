import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

import { authOperations } from './redux/auth';

import 'modern-normalize/modern-normalize.css';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container className={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}

export default App;
