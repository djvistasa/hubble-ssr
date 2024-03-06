import "./styles.scss";
import { IButtonProps } from "./types";
import { getBackgroundColor, getBorderColor, getFontColor } from "./utils";

function Button({
  title,
  onClick,
  variant = "primary",
  testID,

  disabled = false,
}: IButtonProps) {
  const backgroundColor = getBackgroundColor(variant);
  const color = getFontColor(variant);
  const borderColor = getBorderColor(variant);
  return (
    <button
      className="button"
      style={{ backgroundColor, color, borderColor }}
      data-testid={testID}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
