import { Route, Redirect } from 'react-router-dom'
import { useUser } from '../hooks/useUser';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }) => {
  let [isLogged] = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}