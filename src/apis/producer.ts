import { CreateAxiosDefaults } from 'axios';
import createApi from './createApis';
import { ProducerRequest, BaseResponse } from '../interface/Api';
import { Producer, ProducerFilters } from '../interface/producer';

export const getProducer = (config: CreateAxiosDefaults) =>
  createApi<ProducerRequest, BaseResponse<Producer>>(
    {
      path: 'producer',
      method: 'POST',
    },
    config,
  );
