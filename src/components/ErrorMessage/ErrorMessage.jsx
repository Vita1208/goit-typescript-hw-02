import toast from 'react-hot-toast';

export function handleErrorMessage(error) {
  toast.error(`Oops, something went wrong: ${error.message}`);
}