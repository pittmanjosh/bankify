import { useState } from "react";

export default function useInput(init) {
  const [value, setValue] = useState(init);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
    clear: () => setValue(init),
    setValue,
  };
}
