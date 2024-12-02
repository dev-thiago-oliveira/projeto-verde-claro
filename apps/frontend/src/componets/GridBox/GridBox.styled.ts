import { Paper, styled } from '@mui/material';

export const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: '#cccccc33',
  height: '100%',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

