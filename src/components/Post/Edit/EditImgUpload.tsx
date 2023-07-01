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
  display: flex;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border: 1px solid #dedde2;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const ImgCountBox = styled.div`
  margin-top: 2px;
  font-size: 12px;
`;

const CurrentCountText = styled.span`
  color: #8f00ff;
`;

const UploadImagesBox = styled.div`
  display: flex;
  padding: 15px 0;
  overflow-x: scroll;
  gap: 15px;
`;

const UploadImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  object-fit: cover;
`;

const Imgbox = styled.div`
  position: relative;
`;

const CancelBox = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
`;
