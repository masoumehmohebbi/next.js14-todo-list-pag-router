import { Tooltip, Button as NextUI_Btn } from '@nextui-org/react';
import React from 'react';

type PropType = {
  content: string;
  size?: 'sm' | 'md' | 'lg' | undefined;
  children: React.ReactNode;
  onClick?: () => void;
  color?:
    | 'secondary'
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
};
const Button = ({ content, color, size, children, onClick }: PropType) => {
  return (
    <Tooltip key="secondary" color={color} content={content}>
      <NextUI_Btn
        size={size}
        isIconOnly
        color={color}
        variant="faded"
        aria-label="Take a photo"
        onClick={onClick}
      >
        {children}
      </NextUI_Btn>
    </Tooltip>
  );
};

export default Button;
