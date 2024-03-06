type IButtonProps = {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: IButtonVariant;
  testID?: string;
};

type IButtonVariant = "primary" | "secondary" | "tertiary" | "dark";

export type { IButtonProps, IButtonVariant };
