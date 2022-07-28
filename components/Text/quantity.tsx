import { Fragment, ReactNode } from "react";

interface QuantityProps {
  type: string;
  children: ReactNode;
}

export function Quantity({ type, children }: QuantityProps) {
  if (type == "speed") {
    return (
      <Fragment>
        {children} ms<sup>-1</sup>
      </Fragment>
    );
  } else if (type == "temp") {
    return (
      <Fragment>
        {children} C<sup>0</sup>
      </Fragment>
    );
  } else if (type == "precent") {
    return <Fragment>{children} %</Fragment>;
  } else if (type == "pressure") {
    return <Fragment>{children} hPa</Fragment>;
  } else if (type == "angle") {
    return (
      <Fragment>
        {children}
        <sup>0</sup>
      </Fragment>
    );
  } else {
    return <Fragment>{children}</Fragment>;
  }
}
