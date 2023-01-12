import { CreateAxiosDefaults } from 'axios';
import { VnRequest, BaseResponse, UseRequest } from '../interface/Api';
import { Vn as VnType, VnFilters } from '../interface/Vn';
import createApi from './createApis';

export const getVn = (config: CreateAxiosDefaults, use: UseRequest) =>
  createApi<VnRequest, BaseResponse<VnType>>(
    {
      path: 'vn',
      method: 'POST',
    },
    config,
    use,
  );
