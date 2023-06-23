import React from 'react';
import styled from 'styled-components';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CancelIcon from '@mui/icons-material/Cancel';

interface EditImgUploadProps {
  images: ImageListType;
  setImages: React.Dispatch<React.SetStateAction<ImageListType>>;
}

export default function EditImgUpload({
  images,
  setImages,
}: EditImgUploadProps) {
  const maxNumber = 10;

  const handleImageChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={handleImageChange}
      maxNumber={maxNumber}
    >
      {({ imageList, onImageUpload, onImageRemove }) => (
        <UploadImagesBox>
          <CameraImgBox onClick={onImageUpload}>
            <CameraAltIcon />
            <ImgCountBox>
              <CurrentCountText>{images.length}</CurrentCountText> / 10
            </ImgCountBox>
          </CameraImgBox>
          {imageList.map((image, index) => (
            <Imgbox key={index}>
              <UploadImg src={image.dataURL} />
              <CancelBox>
                <CancelIcon
                  onClick={() => onImageRemove(index)}
                  fontSize="small"
                />
              </CancelBox>
            </Imgbox>
          ))}
        </UploadImagesBox>
      )}
    </ImageUploading>
  );
}

const CameraImgBox = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border: 1px solid #dedde2;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgCountBox = styled.div`
  font-size: 12px;
  margin-top: 2px;
`;

const CurrentCountText = styled.span`
  color: #8f00ff;
`;

const UploadImagesBox = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  overflow-x: scroll;
`;

const UploadImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
`;

const Imgbox = styled.div`
  position: relative;
`;

const CancelBox = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
`;