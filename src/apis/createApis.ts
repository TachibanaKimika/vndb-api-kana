import axios, { AxiosResponse, CreateAxiosDefaults } from 'axios';

export interface ApiPath {
  method: 'GET' | 'POST';
  path: string;
}

const responseInterceptors = (res: AxiosResponse) => {
  if (res?.status === 200) {
    return res?.data;
  }
};

const request = (config?: CreateAxiosDefaults) => {
  const axiosInstance = axios.create(config);
  axiosInstance.interceptors.response.use(responseInterceptors);

  return axiosInstance;
};

const fieldFmt = (fields: string[]) => fields.join(', ');

const hasFields = <T>(obj: T): obj is T & { fields: string[] | string } =>
  (obj as any).fields !== undefined;

export default function createApi<T, S>(
  apiPath: ApiPath,
  config?: CreateAxiosDefaults,
) {
  const axiosInstance = request(config);
  return async (params: T = {} as T): Promise<S> => {
    const { method, path } = apiPath;
    if (hasFields(params)) {
      params.fields = fieldFmt(params.fields as string[]);
    }
    switch (method) {
      case 'GET': {
        return axiosInstance.get(path, { params });
      }
      case 'POST': {
        return axiosInstance.post(path, params);
      }
      default: {
        throw new Error('Method not supported');
      }
    }
  };
}
