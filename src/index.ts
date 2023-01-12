import { CreateAxiosDefaults } from 'axios';
import createApi, { ApiPath } from './apis/createApis';
import apis from './apis';
export * from './interface/Api';
export * from './interface/Character';
export * from './interface/Vn';
export * from './interface/Release';
export * from './interface/Producer';
export * from './interface/Tag';

const defaultConfig: CreateAxiosDefaults = {
  baseURL: 'https://api.vndb.org/kana',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default class VNDBAPI {
  public apis: {
    [K in keyof typeof apis]: ReturnType<(typeof apis)[K]>;
  } = {} as any;

  private auth: string;

  private config: CreateAxiosDefaults;

  constructor(config: CreateAxiosDefaults = {}) {
    this.config = {
      ...defaultConfig,
      ...config,
    };

    this.createApis();
  }

  private createApis() {
    Object.entries(apis).forEach(([key, value]: [string, any]) => {
      this.apis[key] = value(this.config);
    });
  }

  public async rawRequest<T = unknown, S = unknown>(path: ApiPath, data: T) {
    return await createApi<T, S>(path, this.config)(data);
  }

  public setAuth(auth: string) {
    this.auth = auth;
    this.config.headers['Authorization'] = `TOKEN ${this.auth}`;
    this.createApis();
  }
}
const api = new VNDBAPI().apis;
export { VNDBAPI, api };
