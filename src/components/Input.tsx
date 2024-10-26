import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label?: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <p className="mb-2">
      {label && (
        <label className="font-semibold pb-1 block" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="px-2 w-full rounded-sm py-1 bg-gray-700"
        id={id}
        {...props}
      />
    </p>
  );
};

export default Input;
