import { CreateAxiosDefaults } from 'axios';
import createApi from './createApis';
import { ReleaseRequest, BaseResponse } from '../interface/Api';
import { Release, ReleaseFilters } from '../interface/release';

export const getRelease = (config: CreateAxiosDefaults) =>
  createApi<ReleaseRequest, BaseResponse<Release>>(
    {
      path: 'release',
      method: 'POST',
    },
    config,
  );
