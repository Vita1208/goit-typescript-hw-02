import axios, { AxiosResponse } from "axios";

export interface UnsplashImage {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

export default async function fetchImages(
  query: string,
  page: number = 1
): Promise<AxiosResponse<UnsplashResponse>> {
  const response = await axios.get<UnsplashResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        orientation: "landscape",
      },
      headers: {
        Authorization: "Client-ID IBn2xaIys04yie9R_w3Q7JdK8jLIMeDSViaZL21tUyI",
      },
    }
  );
  return response;
}


