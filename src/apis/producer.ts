import { CreateAxiosDefaults } from 'axios';
import createApi from './createApis';
import { ProducerRequest, BaseResponse, UseRequest } from '../interface/Api';
import { Producer, ProducerFilters } from '../interface/producer';

export const getProducer = (config: CreateAxiosDefaults, use: UseRequest) =>
  createApi<ProducerRequest, BaseResponse<Producer>>(
    {
      path: 'producer',
      method: 'POST',
    },
    config,
    use,
  );
