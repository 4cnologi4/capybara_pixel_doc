import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { http } from './api-client';

// Generic query hook
export const useApiQuery = <T>(
  key: string[],
  url: string,
  options?: UseQueryOptions<T, Error>
) => {
  return useQuery<T, Error>({
    queryKey: key,
    queryFn: async () => {
      const response = await http.get<T>(url);
      return response as T; // Explicit type assertion
    },
    staleTime: 1000 * 60 * 5, // 5 minutes cache
    ...options,
  });
};

// Generic mutation hook
export const useApiMutation = <T, V = unknown>(
  method: 'post' | 'put' | 'delete',
  url: string,
  options?: UseMutationOptions<T, Error, V>
) => {
  return useMutation<T, Error, V>({
    mutationFn: (data: V) => {
      if (method === 'delete') {
        return http.delete<T>(url, { data }).then(res => res as T);
      }
      return http[method]<T>(url, data).then(res => res as T);
    },
    ...options
  });
}; 