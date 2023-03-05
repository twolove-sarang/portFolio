import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { deleteContact, viewContact } from '../api/firebase';

export default function useComment() {
  const queryClient = useQueryClient();
  const commentQuery = useQuery({
    queryKey: ['comment'],
    queryFn: viewContact,
    staleTime: 1000 * 5 * 10,
  });

  const commentMutation = useMutation({
    mutationFn: viewContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment'] });
    },
  });

  const commentRemoveMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment'] });
    },
  });

  return { commentQuery, commentMutation, commentRemoveMutation };
}
