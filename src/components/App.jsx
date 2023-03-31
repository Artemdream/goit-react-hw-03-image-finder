import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './API/api';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    showModal: false,
    isLoading: false,
    error: null,
  };

  //* Якщо змінився state рендеримо картинки
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) this.getImages();
  }

  //* Отримуємо дані з fetch і записуємо в state
  getImages = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const { hits } = await fetchImages(searchQuery, page);
      console.log(hits);

      this.setState(({ page, images }) => ({
        images: [...images, ...hits],
        page: page + 1,
      }));
    } catch (error) {
      this.setState({
        error: 'sorry, the server is not responding, try again later',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  //* По кліку отримуємо велике зображення і відкриваємо модалку
  getLargeImage = largeImage => {
    this.setState({ largeImage, showModal: true });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  //* При сабміті форми отримує значення інпуту і скидає images та page
  handleFormSubmit = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

  render() {
    const { showModal, isLoading, images, largeImage, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error}
        <ImageGallery items={images} onGetImages={this.getLargeImage} />
        {isLoading && <Loader />}
        {images.length >= 12 && <Button onLoadMore={() => this.getImages} />}
        {showModal && (
          <Modal largeImage={largeImage} onClick={this.toggleModal} />
        )}
      </div>
    );
  }
}
