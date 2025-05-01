import { useMutation, useQuery } from "@tanstack/react-query"
import { createUser, getAllUsers } from "../services/user.service"

export const useUser = () => {
  const query = useQuery({
    queryKey: ['user'],
    queryFn: getAllUsers,
  })

  const mutate = useMutation({
    mutationFn: createUser,
    mutationKey: ['user'],
  })

  return {
    data: query.data,
    isPending: query.isLoading,
    error: query.error,
    refetch: query.refetch,
    createUser: mutate.mutate,
    isCreating: mutate.isPending,
    errorCreate: mutate.error,
  };
}
