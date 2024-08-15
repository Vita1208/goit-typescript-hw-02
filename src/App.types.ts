export interface Image {
  id: string;
  alt_description: string;
  likes: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}