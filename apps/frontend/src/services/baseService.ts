import qs from 'qs';
import { SWRConfiguration } from 'swr';

export async function fetcher(url: string) {
  const apiUrl = process.env.REACT_APP_API_URL;

  if (!apiUrl) {
    throw new Error('REACT_APP_API_URL is not defined in .env file');
  }

  const res = await fetch(`${apiUrl}/api/${url}`).then(async response => {
    try {
      return await response.json();
    } catch (err) {
      console.error(err);
      throw new Error();
    }
  });

  return res;
};

export function formatParameters(data: unknown) {
  return qs.stringify(data, {
    arrayFormat: 'brackets',
    skipNulls: true
  });
}

export const swrConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateIfStale: false,
  errorRetryCount: 0,
  onErrorRetry: (
    error: Error,
    key: string,
    config: SWRConfiguration,
    revalidate: (options: { retryCount?: number }) => void,
    context: { retryCount: number }
  ) => {
    if (error.message.includes('404')) return;
    if (context.retryCount >= 3) return;

    setTimeout(() => revalidate({ retryCount: context.retryCount }), 2000);
  },
};


export { };