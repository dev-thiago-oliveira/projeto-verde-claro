import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { IBook } from '../../../types/types';
import { BookCard } from '../BookCard/BookCard.component';

import * as SC from './BookList.styled';

export type IBookListProps = {
  books: IBook[];
  handleAddFavorite: (data: IBook) => void;
  handleDeleteFavorite: (id: string) => void;
}

export function BookList({ books, handleAddFavorite, handleDeleteFavorite }: IBookListProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SC.Container>
      <Grid container spacing={isMobile ? 1 : 2} direction={'column'}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={`book-${index}`}>
            <BookCard book={book} handleAddFavorite={handleAddFavorite} handleDeleteFavorite={handleDeleteFavorite} />
          </Grid>
        ))}
      </Grid>
    </SC.Container>
  );
}