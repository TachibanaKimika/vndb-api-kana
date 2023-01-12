import { CreateAxiosDefaults } from 'axios';
import createApi from './createApis';
import {
  TagRequest,
  TraitRequest,
  BaseResponse,
  UseRequest,
} from '../interface/Api';
import { Tag, TagFilters, Trait, TraitFilters } from '../interface/tag';

export const getTag = (config: CreateAxiosDefaults, use: UseRequest) =>
  createApi<TagRequest, BaseResponse<Tag>>(
    {
      path: 'tag',
      method: 'POST',
    },
    config,
    use,
  );

export const getTrait = (config: CreateAxiosDefaults, use: UseRequest) =>
  createApi<TraitRequest, BaseResponse<Trait>>(
    {
      path: 'trait',
      method: 'POST',
    },
    config,
    use,
  );
