import { useQuery } from "@tanstack/react-query";
export const useApiRequest = (key, requestInitiator, config = {}) => {
  const queryResponse = useQuery({
    queryKey: key,
    queryFn: requestInitiator,
    ...config,
  });

  return ({
    data,
    dataUpdatedAt,
    error,
    errorUpdateCount,
    errorUpdatedAt,
    failureCount,
    failureReason,
    fetchStatus,
    isError,
    isFetched,
    isFetchedAfterMount,
    isFetching,
    isInitialLoading,
    isLoading,
    isLoadingError,
    isPaused,
    isPlaceholderData,
    isPreviousData,
    isRefetchError,
    isRefetching,
    isStale,
    isSuccess,
    refetch,
    remove,
    status,
  } = queryResponse);
};
