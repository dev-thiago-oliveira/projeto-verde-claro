import { CircularProgress } from '@mui/material';
import SearchOffIcons from '@mui/icons-material/SearchOff';
import { BookList, IBookListProps } from '../../Book/BookList/BookList.component';

type IProps = IBookListProps & {
  isError: boolean;
  isLoading: boolean;
}

export function DataList({ books = [], isError, isLoading, handleAddFavorite, handleDeleteFavorite }: IProps) {
  return (
    isLoading ?
      <CircularProgress size='3rem' sx={{ marginY: 10 }} /> :
      isError ?
        <SearchOffIcons color='disabled' sx={{ fontSize: 80, marginY: 10 }} /> :
        books.length ?
          <BookList
            books={books}
            handleAddFavorite={handleAddFavorite}
            handleDeleteFavorite={handleDeleteFavorite}
          /> :
          <SearchOffIcons color='disabled' sx={{ fontSize: 80, marginY: 10 }} />
  );
}