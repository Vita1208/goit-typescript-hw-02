import toast from 'react-hot-toast';

interface Error {
  message: string;
}

export function handleErrorMessage(error: Error) {
  toast.error(`Oops, something went wrong: ${error.message}`);
}