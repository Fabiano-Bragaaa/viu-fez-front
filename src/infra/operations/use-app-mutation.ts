import { useMutation } from "@tanstack/react-query";

export type UseAppMutationOptions<TD> = {
  onSuccess: (data: TD) => void;
  onError: (error: Error) => void;
};

type UseAppMutationReturn<TD, TV> = {
  mutate: (variables: TV) => TD | void;
  isLoading: boolean;
  error: Error | null;
};

type UseAppMutationParams<TD, TV> = {
  mutationFn: (variables: TV) => Promise<TD>;
} & UseAppMutationOptions<TD>;

export function useAppMutation<TD, TV>({
  mutationFn,
  onSuccess,
  onError,
}: UseAppMutationParams<TD, TV>): UseAppMutationReturn<TD, TV> {
  const { mutate, isPending, error } = useMutation<TD, Error, TV>({
    mutationFn,
    onSuccess,
    onError,
  });

  return {
    mutate,
    isLoading: isPending,
    error,
  };
}
