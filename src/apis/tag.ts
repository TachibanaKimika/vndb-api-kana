import { CreateAxiosDefaults } from 'axios';
import createApi from './createApis';
import { TagRequest, TraitRequest, BaseResponse } from '../interface/Api';
import { Tag, TagFilters, Trait, TraitFilters } from '../interface/tag';

export const getTag = (config: CreateAxiosDefaults) =>
  createApi<TagRequest, BaseResponse<Tag>>(
    {
      path: 'tag',
      method: 'POST',
    },
    config,
  );

export const getTrait = (config: CreateAxiosDefaults) =>
  createApi<TraitRequest, BaseResponse<Trait>>(
    {
      path: 'trait',
      method: 'POST',
    },
    config,
  );
