import { styled } from '@mui/material';

type IProps = {
    selected: boolean;
}

export const ImgLanguage = styled('img')<IProps>(({ selected }) => ({
  filter: selected ? 'grayscale(0)' : 'grayscale(1)',
  height: 40,
  whidth: 40,
  transition: 'filter 0.3s ease'
}));
