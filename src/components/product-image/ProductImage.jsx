import React, { useState, useEffect, useRef } from 'react';
import { useStorage } from '../../hooks/UseStorage';
import './ProductImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import defaultIcon from '../../assets/icons/addImageIcon.webp';

export const ProductImage = ({ product, setProduct }) => {
  const hiddenFileInput = useRef(null);

  // Fire base state
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFirebaseChange = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  };

  // Getting the progress and url from the hook
  const { url } = useStorage(file);

  useEffect(() => {
    if (file !== null) {
      setProduct({ ...product, imageUrl: url });
    }
  }, [url]);

  return (
    <div id='display-image-wrapper'>
      <img
        id='display-image'
        alt='product illustration'
        style={{ padding: product.imageUrl === null ? '0.2vw' : null }}
        src={product.imageUrl === null ? defaultIcon : product.imageUrl}
        onClick={handleClick}
      />
      <label id='uploade-image'>
        <FontAwesomeIcon
          icon={faUpload}
          style={{ marginLeft: '1vw', width: '2.5vw', height: '2.5vw' }}
        >
          <button onClick={handleClick}></button>
        </FontAwesomeIcon>
        <input
          type='file'
          ref={hiddenFileInput}
          onChange={handleFirebaseChange}
          style={{ display: 'none' }}
        />
      </label>
      {error && <p>{error}</p>}
    </div>
  );
};
