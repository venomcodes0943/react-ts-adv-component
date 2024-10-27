import { ComponentPropsWithoutRef, FC, FormEvent, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form: FC<FormProps> = ({ children, onSave, ...formProps }) => {
  const form = useRef<HTMLFormElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);

    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...formProps}>
      {children}
    </form>
  );
};

export default Form;
