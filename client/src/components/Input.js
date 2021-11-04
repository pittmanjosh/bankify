import { useState } from "react";

export default function Input({label,ac,state,type}) {
  const {value, onChange} = state;

  return (
    <input
      type={type || "text"}
      placeholder={label}
      autoComplete={ac}
      className="form-control mb-3"
      value={value}
      onChange={onChange}
      required
    />
  )
}