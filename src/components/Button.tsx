import { FC, type ComponentPropsWithRef } from "react";

interface ButtonProp extends ComponentPropsWithRef<"button"> {
  href?: never;
}
interface AncorProps extends ComponentPropsWithRef<"a"> {
  href?: string;
}

function isAncor(props: ButtonProp | AncorProps): props is AncorProps {
  return "href" in props;
}

const Button: FC<ButtonProp | AncorProps> = (props) => {
  if (isAncor(props)) {
    return (
      <a className="text-blue-700" {...props}>
        {props.children}
      </a>
    );
  }

  return (
    <button {...props}>
      {props.children}
    </button>
  );
};

export default Button;
