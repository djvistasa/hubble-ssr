import styles from "@/theme/colors.module.scss";

type IButtonProps = {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: IButtonVariant;
  testID?: string;
  color?: keyof typeof styles;
};

type IButtonVariant = "primary" | "secondary" | "tertiary" | "dark";

export type { IButtonProps, IButtonVariant };
