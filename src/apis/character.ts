import { CreateAxiosDefaults } from 'axios';
import createApi from './createApis';
import { CharacterRequest, BaseResponse, UseRequest } from '../interface/Api';
import { Character, CharacterFilters } from '../interface/Character';

export const getCharacter = (config: CreateAxiosDefaults, use: UseRequest) =>
  createApi<CharacterRequest, BaseResponse<Character>>(
    {
      path: 'character',
      method: 'POST',
    },
    config,
    use,
  );
