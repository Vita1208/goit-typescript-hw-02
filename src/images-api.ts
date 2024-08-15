import axios, { AxiosResponse } from "axios";

const ACCESS_KEY = "IBn2xaIys04yie9R_w3Q7JdK8jLIMeDSViaZL21tUyI"; 

interface FetchImagesResponse {
  results: Array<{
    id: string;
    urls: {
      regular: string;
    };
    alt_description?: string;
  }>;
  total_pages: number;
}

// Функція для отримання зображень з API Unsplash
export const fetchImagesBySearchQuery = async (
  searchQuery: string,
  currentPage: number = 1
): Promise<FetchImagesResponse | undefined> => {
  const params = {
    query: searchQuery,
    page: currentPage.toString(),
    per_page: "20",
  };

  try {
    const response: AxiosResponse<FetchImagesResponse> = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params,
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", (error as Error).message);
    return undefined;
  }
};

