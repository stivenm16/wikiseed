interface Props {
  label: string;
  disabled: boolean;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}
function Button({ label, disabled, onClick, type }: Props) {
  return (
    <>
      <button disabled={disabled} onClick={onClick} type={type}>
        {label}
      </button>
    </>
  );
}

export default Button;
