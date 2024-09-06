interface InputProps {
  name: string;
  label: string;
  value: string | number;
  placeholder?: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { InputProps };
