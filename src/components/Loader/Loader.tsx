import { MutatingDots } from "react-loader-spinner";

interface LoaderProps {
  visible: boolean;
}

export default function Loader({ visible }: LoaderProps) {
  if (!visible) return null; 

  return (
    <MutatingDots
      height="100"
      width="100"
      color="#646cff"
      secondaryColor="#646cff"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
    />
  );
}

