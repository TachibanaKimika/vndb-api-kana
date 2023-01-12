import { CreateAxiosDefaults } from 'axios';
import createApi from './createApis';
import { ReleaseRequest, BaseResponse, UseRequest } from '../interface/Api';
import { Release, ReleaseFilters } from '../interface/release';

export const getRelease = (config: CreateAxiosDefaults, use: UseRequest) =>
  createApi<ReleaseRequest, BaseResponse<Release>>(
    {
      path: 'release',
      method: 'POST',
    },
    config,
    use,
  );
