import { Box, Button, styled, TextField, } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

type IProps = {
    isMobile: boolean;
}

export const Container = styled(Box)<IProps>(({ isMobile }) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  justifyContent: 'center',
  alignItems: 'end',
  marginTop: 2,
  gap: isMobile ? 10 : 20,
  width: '100%',
  padding: '25px 0 10px 0',
  backgourndColor: blueGrey,
}));

export const Field = styled(TextField)<IProps>(({ isMobile }) => ({
  marginBottom: isMobile ? 5 : 0,
}));

export const ToLookFor = styled(Button)(() => ({
  padding: '7px 40px',
}));

export const ContainerField = styled('div')<IProps>(({ isMobile }) => ({
  textAligin: isMobile ? 'center' : 'left',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 10
}));

