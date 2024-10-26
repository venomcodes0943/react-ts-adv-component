import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

type AsProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

type ContainerProps<C extends ElementType> = AsProps<C> &
  ComponentPropsWithRef<C>;

const Container = <T extends ElementType>({
  as: Component = "div",
  children,
  ...props
}: ContainerProps<T>) => {
  return <Component {...props}>{children}</Component>;
};

export default Container;
