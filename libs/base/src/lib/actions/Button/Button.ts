import cn from 'classnames';

export const ButtonBase = {
  sm: cn(''),
  md: cn(''),
  lg: cn(''),
  xl: cn(''),
};

export const Button = {
  elevated: {
    container: cn('bg-neutral-50 shadow rounded-sm'),
    icon: cn(''),
    text: cn('py-3 px-6'),
  },
  filled: {
    container: cn('bg-'),
    icon: cn(''),
    text: cn(''),
  },
  tonal: {
    container: cn(''),
    icon: cn(''),
    text: cn(''),
  },
  outlined: {
    container: cn(''),
    icon: cn(''),
    text: cn(''),
  },
  text: {
    container: cn(''),
    icon: cn(''),
    text: cn(''),
  },
};
