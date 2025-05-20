import { useQuery } from '@tanstack/react-query';
import { fetchCapybaras } from '../../infrastructure/api/capybara';

export function useCapybaras() {
  return useQuery(['capybaras'], fetchCapybaras);
}
