import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

import { authOperations, authSelectors } from './redux/auth';

import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const InfoView = lazy(() => import('./views/InfoView'));

function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <Suspense fallback={<Spinner animation="border" variant="primary" />}>
          <AppBar />

          <Switch>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>

            <Route path="/info">
              <InfoView />
            </Route>

            <Route>
              <>
                <Redirect to="/info" />
              </>
            </Route>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}

export default App;
