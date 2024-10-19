export const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className="gallery-item" onClick={() => onImageClick(image.largeImageURL)}>
      <img src={image.webformatURL} alt="" className="gallery-image" />
    </li>
  );
};
