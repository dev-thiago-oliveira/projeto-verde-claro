import { AppBar, Box, Container, IconButton } from '@mui/material';
import logo from '../../assets/imagens/logo.svg';
import ptImg from '../../assets/imagens/pt.svg';
import enImg from '../../assets/imagens/en.svg';
import esImg from '../../assets/imagens/es.svg';
import { useTranslation } from 'react-i18next';

import * as SC from './Header.styled';

export function Header() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const getIconButtomLanguage = (pathImage: string, alt: string, lang: string) => {
    return (
      <IconButton size='medium' color='inherit' onClick={() => handleLanguageChange(lang)}>
        <SC.ImgLanguage selected={i18n.language === lang || i18n.resolvedLanguage === lang} src={pathImage} alt={alt} />
      </IconButton>
    );
  };

  return (
    <AppBar position='fixed' color='primary' >
      <Box sx={{ display: 'flex', alignItems: 'center', pr: 3 }}>
        <Container maxWidth='xl' >
          <img height={35} src={logo} alt='Logotipo' />
        </Container>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {getIconButtomLanguage(ptImg, t('brazilianFlag'), 'pt')}
          {getIconButtomLanguage(enImg, t('americanFlag'), 'en')}
          {getIconButtomLanguage(esImg, t('spanishFlag'), 'es')}
        </Box>
      </Box>
    </AppBar>
  );
}