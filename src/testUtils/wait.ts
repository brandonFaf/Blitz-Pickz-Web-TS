import { act } from 'react-dom/test-utils';

export default async () =>
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
  });
