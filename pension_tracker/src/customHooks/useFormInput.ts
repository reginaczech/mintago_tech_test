import { SetStateAction, useState } from "react";

function useFormChange(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

export default useFormChange;
