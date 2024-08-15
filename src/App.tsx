import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import  { fetchImagesBySearchQuery } from "./images-api"; 
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

interface Image {
  id: string;
  urls: {
    regular: string;
  };
  alt_description?: string;
}

interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [modalImg, setModalImg] = useState<Image | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    setLoader(true);
    fetchImagesBySearchQuery(query, page)
      .then((response) => {
        if (response) {
          setImages((prevImages) => [...prevImages, ...response.results]);
          setTotalPages(response.total_pages);
          if (!response.results.length) {
            toast.error(`Nothing was found for the word "${query}"`);
          }
        }
      })
      .catch(() => {
        toast.error("Oops, something went wrong, try reloading the page");
      })
      .finally(() => setLoader(false));
  }, [query, page]);

  const onSearch = (query: string) => {
    if (!query) {
      toast.error("Enter a word");
      return;
    }
    setQuery(query);
    setImages([]);
    setTotalPages(0);
    setPage(1);
  };

  const openCloseModal = () => {
    setOpenModal(!openModal);
    document.body.style.overflow = openModal ? "auto" : "hidden";
  };

  const handleOpenModal = (currentId: string) => {
    const currentImg = images.find(({ id }) => id === currentId) || null;
    setModalImg(currentImg);
    openCloseModal();
  };

  const onLoadMore = () => setPage((prevPage) => prevPage + 1);

  const visibleBtnMore = () => images.length !== 0 && page < totalPages;

  return (
    <>
      <SearchBar handleSearch={onSearch} />
      <Toaster position="top-right" />
      <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      {loader && <Loader />}
      {visibleBtnMore() && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {openModal && (
        <ImageModal openCloseModal={openCloseModal} modalImg={modalImg} />
      )}
    </>
  );
}

export default App;




