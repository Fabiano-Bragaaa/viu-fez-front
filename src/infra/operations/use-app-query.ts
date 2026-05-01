import { useQuery } from "@tanstack/react-query";

type UseFetchDataReturn<TD> = {
  data?: TD;
  isLoading: boolean;
  error: Error | null;
};

type UseAppQueryParams<TD> = {
  queryKey: (string | number | undefined | null)[];
  queryFn: () => Promise<TD>;
};

export function useAppQuery<TD>({
  queryKey,
  queryFn,
}: UseAppQueryParams<TD>): UseFetchDataReturn<TD> {
  const { data, isPending, error } = useQuery<TD, Error, TD>({
    queryKey,
    queryFn,
  });

  return {
    data,
    isLoading: isPending,
    error,
  };
}
