interface InputProps {
  name: string;
  label: string;
  type: "text" | "number";
  value: string | number;
  placeholder?: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  isCurrency?: boolean;
  suffix?: string;
}

export type { InputProps };
