interface InputProps {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { InputProps };
