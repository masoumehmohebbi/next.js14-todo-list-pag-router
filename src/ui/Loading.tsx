import { Spinner } from '@nextui-org/react';
import React from 'react';

type ModalProps = {
  size?: 'sm' | 'md' | 'lg' | undefined;
  color?:
    | 'current'
    | 'white'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
};
const Loading = ({ size, color }: ModalProps) => {
  return <Spinner size={size} color={color} />;
};

export default Loading;
