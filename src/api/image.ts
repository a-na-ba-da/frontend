import axios from './defaultClient';

interface uploadImagesProps {
  images: any;
  type: string;
}

export const uploadImages = ({ images, type }: uploadImagesProps) => {
  const formData = new FormData();
  images.forEach((image: { file: string | Blob }) => {
    formData.append('uploadFile', image.file);
  });

  return axios.post('/image?type=' + type, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
};
