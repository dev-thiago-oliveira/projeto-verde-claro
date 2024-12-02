import useSWR from 'swr';
import { fetcher } from '../baseService';
import { IBook } from '../../types/types';

export function useFavoriteBooks() {
  const baseUrl = process.env.REACT_APP_API_URL;
  const key = 'favorites';
  const endpoitUrl = `${baseUrl}/api/${key}`;
  const { data, error, isLoading, mutate } = useSWR<IBook[]>(key, fetcher);

  const createFavorite = async (favorite: IBook): Promise<void> => {
    try {
      const response = await fetch(endpoitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favorite),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o favorito');
      }

      await mutate();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const deleteFavorite = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${endpoitUrl}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao remover o favorito');
      }

      await mutate();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return {
    data: Array.isArray(data) ? data : [],
    error,
    isLoading,
    createFavorite,
    deleteFavorite,
  };
}
