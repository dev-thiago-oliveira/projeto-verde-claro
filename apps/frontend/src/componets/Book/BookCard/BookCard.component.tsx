
import { CardContent, Button, Divider, IconButton, CardHeader, Tooltip } from '@mui/material';
import { IBook } from '../../../types/types';

import * as SC from './BookCard.styled';
import { useTranslation } from 'react-i18next';

type IProps = {
  book: IBook;
  handleAddFavorite: (data: IBook) => void;
  handleDeleteFavorite: (id: string) => void;
}

export function BookCard({
  book,
  handleAddFavorite,
  handleDeleteFavorite
}: IProps) {
  const { t } = useTranslation();

  const handleFavorite = () => {
    if (book.id)
      handleDeleteFavorite(book.id);
    else
      handleAddFavorite(book);
  };

  return (
    <SC.CardContainer>
      <CardHeader
        align='left'
        action={
          <Tooltip title={!book.id ? t('favorite') : t('unfavorite')} placement='left'>
            <IconButton size='large' aria-label='settings' onClick={handleFavorite}>
              {
                book.id ? <SC.StarFilled /> : <SC.StarUnfilled />
              }
            </IconButton>
          </Tooltip>
        }
        title={book.title}
        subheader={book.author}
      />
      <CardContent>
        <SC.Text variant='body2' align='justify'>{book.description}</SC.Text>
        <Divider sx={{ marginY: 1 }} />
        <SC.CardFooter>
          <SC.Text mt={2} variant='subtitle2' color='text.secondary' align='left'>
            {t('soldBy')}: <b>{book.store}</b>
          </SC.Text>
          <Button size='small' href={book.link} target='_blank'>
            <b>{t('goToStore')}</b>
          </Button>
        </SC.CardFooter>
      </CardContent>
    </SC.CardContainer>
  );
}
