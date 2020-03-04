import React from "react";

export const RenderComponent = ({ component: Component, ...props }) => {
  return <Component {...props} />;
};
