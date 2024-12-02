import useSWR from 'swr';
import { fetcher } from '../baseService';
import i18n from 'i18next';

export function useSearchBooks(param: string) {
  const key = param ? `books?bookSubject=${param}&lang=${i18n.resolvedLanguage}` : null;
  const { data, error, isLoading } = useSWR(key, fetcher);

  return {
    data: Array.isArray(data) ? data : [],
    error,
    isLoading
  };
}