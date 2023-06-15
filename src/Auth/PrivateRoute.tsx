import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const token = localStorage.getItem("auth");

  if (token === "LogInApproved") {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
