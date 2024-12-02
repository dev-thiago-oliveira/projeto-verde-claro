import { Paper, styled } from '@mui/material';

export const Container = styled(Paper)(({ theme }) => ({
  padding: '25px',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  minHeight: '100vh',
  minWidth: '100vw',
}));

