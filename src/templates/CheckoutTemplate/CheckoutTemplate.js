import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";

export default function CheckoutTemplate(props) {
  const { Component, ...restProps } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute}></Component>
          </Fragment>
        );
      }}
    />
  );
}
