import { Capybara } from '../../core/entities/capybara';

export async function fetchCapybaras(): Promise<Capybara[]> {
  const response = await fetch('/api/capybaras');
  return response.json();
}
