import { ButtonContainner, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainner variant={variant}>Enviar</ButtonContainner>;
}
