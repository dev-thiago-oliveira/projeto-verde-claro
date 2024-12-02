import { Card, styled, Typography, } from '@mui/material';
import StarFiledIcon from '@mui/icons-material/Star';
import StarUnfiledIcon from '@mui/icons-material/StarOutline';
import { green } from '@mui/material/colors';

export const CardContainer = styled(Card)(() => ({
  width: '100%',
}));

export const Text = styled(Typography)(() => ({
  textAlign: 'justify',
}));

export const CardFooter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end'
}));

export const StarFilled = styled(StarFiledIcon)(() => ({
  color: green[400],
  fontSize: 30
}));

export const StarUnfilled = styled(StarUnfiledIcon)(() => ({
  fill: green[400],
  fontSize: 30
}));
