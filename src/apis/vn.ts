import { CreateAxiosDefaults } from 'axios';
import { VnRequest, BaseResponse } from '../interface/Api';
import { Vn as VnType, VnFilters } from '../interface/Vn';
import createApi from './createApis';

export const getVn = (config: CreateAxiosDefaults) =>
  createApi<VnRequest, BaseResponse<VnType>>(
    {
      path: 'vn',
      method: 'POST',
    },
    config,
  );
