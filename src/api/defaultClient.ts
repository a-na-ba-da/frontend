// axios 관련 설정
import axios, { type Axios } from 'axios';
import baseURL from './basURL';

const defaultClient: Axios = axios.create({
  baseURL,
});

export default defaultClient;
