import React, { type PropsWithChildren } from "react";
import {
  Button as PaperButton,
  type ButtonProps as PaperButtonProps,
} from "react-native-paper";

export interface ButtonProps extends PaperButtonProps {
  enabled?: boolean;
}

const Button = ({
  children,
  enabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const btnProps: Omit<PaperButtonProps, "children"> = {
    ...props,
  };

  if (enabled === true) {
    btnProps.disabled = false;
  } else if (enabled === false) {
    btnProps.disabled = true;
  }
  return <Button {...btnProps}>{children}</Button>;
};

export default Button;
