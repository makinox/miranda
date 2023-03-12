import cn from 'classnames';

export const ButtonBase = {
  sm: cn(''),
  md: cn(''),
  lg: cn(''),
  xl: cn(''),
};

export const Button = {
  elevated: {
    container: cn(
      'bg-cyan-200 shadow rounded-xl inline-flex items-center justify-center'
    ),
    icon: cn(''),
    text: cn('py-3 px-6 text-center text-base'),
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
