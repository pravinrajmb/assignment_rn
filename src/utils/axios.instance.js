import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const axiosInstance = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1',
});

AxiosLogger.setGlobalConfig({
  status: true,
  header: false,
  statusText: true,
  code: true,
});

if (__DEV__) {
  axiosInstance.interceptors.request.use(
    AxiosLogger.requestLogger,
    AxiosLogger.errorLogger,
  );
  axiosInstance.interceptors.response.use(
    AxiosLogger.responseLogger,
    AxiosLogger.errorLogger,
  );
}

export default axiosInstance;
