import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { viewWorkForm } from '../api/firebase';

export default function useWorkForm() {
  const queryClient = useQueryClient();
  const workFormQuery = useQuery({
    queryKey: ['workform'],
    queryFn: viewWorkForm,
    staleTime: 1000 * 5 * 10,
  });

  const workFormMutation = useMutation({
    mutationFn: viewWorkForm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workform'] });
    },
  });

  return { workFormQuery, workFormMutation };
}
