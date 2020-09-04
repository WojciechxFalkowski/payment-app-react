import React, { Fragment, useMemo } from "react";
import { RootButton, RegularButton, BackgroundButton } from "./Button.css";
const Button = ({ variant, children, ...props }) => {
  const Component = useMemo(() => {
    switch (variant) {
      case "regular":
        return RegularButton;
      case "background":
        return BackgroundButton;
      default:
        return RegularButton;
    }
  }, [variant]);
  const content = useMemo(() => <Component {...props}>{children}</Component>, [
    props,
    children,
  ]);
  return <Fragment>{content}</Fragment>;
};

export default Button;
