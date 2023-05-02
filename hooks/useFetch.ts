import useSWR from 'swr';

export const fetchFetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok || res.status === 500) {
    const error = new Error(
      'An error occurred while fetching the data.... retrying...'
    );
    throw error;
  }

  return res.json();
};

type ApiResponse<T> = {
  data: T;
  error?: Error;
  isLoading: boolean;
};

export const useFetch = <T>(url: string, maxRetry = 3): ApiResponse<T> => {
  const { data, error, isLoading } = useSWR(
    url?.length ? url : null,
    fetchFetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount >= maxRetry) return;
        console.log('retry');
        // Retry after 1 second1.
        setTimeout(() => revalidate({ retryCount }), 1000);
      },
      errorRetryCount: maxRetry,
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    isLoading,
    error,
  };
};
