import { Container, Divider, Grid2, Typography } from '@mui/material';
import { GridBox } from '../GridBox/GridBox.component';
import { SearchBar } from '../SearchBar/SearchBar.component';
import StarUnfiledIcon from '@mui/icons-material/StarOutline';
import { useState, useMemo } from 'react';
import { useSearchBooks } from '../../services/dataSouce.ts/useSearchBooks';
import { useFavoriteBooks } from '../../services/dataSouce.ts/useFavoriteBooks';
import { IBook } from '../../types/types';
import { DataList } from './DataList/DataList.component';
import { useTranslation } from 'react-i18next';

export function HomePageContent() {
  const { t } = useTranslation();
  const [inputData, setInputData] = useState('');
  const {
    data: booksData = [],
    isLoading: booksIsLoading,
    error: booksIsError
  } = useSearchBooks(inputData);
  const {
    data: favorites = [],
    isLoading: favoritesIsLoading,
    error: favoritesIsError,
    createFavorite,
    deleteFavorite
  } = useFavoriteBooks();
  const books = useMemo(() => {
    return booksData.map((book: IBook) => {
      const favorite = favorites?.find(
        (fav) => fav.title === book.title && fav.author === book.author && fav.store === book.store
      );

      if (favorite) {
        return { ...book, id: favorite.id };
      }

      return book;
    });
  }, [booksData, favorites]);


  const handleAddFavorite = async (data: IBook) => {
    await createFavorite(data);
  };

  const handleDeleteFavorite = async (id: string) => {
    await deleteFavorite(id);
  };

  return (
    <Grid2 container spacing={2} padding={2} pt={8} height={'100vh'}>
      <Grid2 size={8}>
        <GridBox>
          <Container>
            <SearchBar onSearch={setInputData} />
            <Divider sx={{ marginY: 3 }} />
            <DataList
              books={books}
              isError={booksIsError}
              isLoading={booksIsLoading}
              handleAddFavorite={handleAddFavorite}
              handleDeleteFavorite={handleDeleteFavorite}
            />
          </Container>
        </GridBox>
      </Grid2>
      <Grid2 size={4}>
        <GridBox>
          <Container>
            <Divider sx={{ marginY: 3 }} />
            <StarUnfiledIcon color='primary' sx={{ fontSize: 30 }} />
            <Typography variant='h6'>
              {t('favorites')}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {t('favoritesList')}
            </Typography>
            <Divider sx={{ marginY: 3 }} />
            <DataList
              books={favorites}
              isError={favoritesIsError}
              isLoading={favoritesIsLoading}
              handleAddFavorite={handleAddFavorite}
              handleDeleteFavorite={handleDeleteFavorite}
            />
          </Container>
        </GridBox>
      </Grid2>
    </Grid2>
  );
}
