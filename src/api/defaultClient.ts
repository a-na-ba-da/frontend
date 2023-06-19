// axios 관련 설정
import axios, { type Axios } from 'axios';

const baseURL = 'http://172.105.237.249:8080/api/v1';

const defaultClient: Axios = axios.create({
  baseURL,
});

export default defaultClient;
