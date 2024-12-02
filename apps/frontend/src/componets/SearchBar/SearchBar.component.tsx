import { useState } from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import * as SC from './SearchBar.styled';
import { useTranslation } from 'react-i18next';

type IProps = {
  onSearch: (data: string) => void;
}

export function SearchBar({ onSearch }: IProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [inputData, setInputData] = useState('');

  return (
    <SC.Container isMobile={isMobile}>
      <SC.ContainerField isMobile={isMobile}>
        <Typography align={isMobile ? 'center' : 'left'} variant='h6' color='text.secondary'>
          {t('labelField')}
        </Typography>
        <SC.Field
          size='small'
          fullWidth
          variant='outlined'
          label={!inputData ? t('typeHere') : ''}
          isMobile={isMobile}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)} />
      </SC.ContainerField>
      <SC.ToLookFor
        variant='contained'
        sx={{ backgroundColor: green[500] }}
        size='medium'
        fullWidth={isMobile}
        onClick={() => onSearch(inputData)} >
        {t('search')}
      </SC.ToLookFor>
    </SC.Container>
  );
}