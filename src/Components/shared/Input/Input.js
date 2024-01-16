"use client";

import classNames from "classnames";
import { Label, TextInput } from "flowbite-react";
import { ErrorMessage, useField } from "formik";

const Input = ({ name, label, type = "text", required, ...props }) => {
  const [field, meta, { setValue }] = useField(name);
  const ariaAttributes = {
    "aria-invalid": !!(meta.error && meta.touched),
    "aria-label": label,
  };

  return (
    <div className="mb-5">
      <div className="my-1">
        <Label htmlFor={name} className="text-sm font-semibold">
          {label}
          {required ? <span className="text-red-500">*</span> : null}
        </Label>
      </div>
      <TextInput
        {...props}
        {...field}
        type={type}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        className={classNames({
          error: meta.touched && !!meta.error,
        })}
        {...ariaAttributes}
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <div id={name} className="error-message" role="alert">
            {msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};

export default Input;
