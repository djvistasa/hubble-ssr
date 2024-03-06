import styles from "@/theme/colors.module.scss";
import { IButtonVariant } from "./types";

export const getBackgroundColor = (variant: IButtonVariant) => {
  const colorMap: Record<IButtonVariant, string> = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    dark: "darkGrey",
  };

  return colorMap[variant];
};

export const getBorderColor = (variant: IButtonVariant) => {
  const colorMap: Record<IButtonVariant, string> = {
    primary: "orange",
    secondary: "grey",
    tertiary: "orange",
    dark: "darkGrey",
  };

  return colorMap[variant];
};

export const getFontColor = (variant: IButtonVariant) => {
  const colorMap: Record<IButtonVariant, string> = {
    primary: "white",
    secondary: "grey",
    tertiary: "orange",
    dark: "white",
  };

  return colorMap[variant];
};
