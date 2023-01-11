import { CreateAxiosDefaults } from 'axios';
import createApi from './createApis';
import { CharacterRequest, BaseResponse } from '../interface/Api';
import { Character, CharacterFilters } from '../interface/Character';

export const getCharacter = (config: CreateAxiosDefaults) =>
  createApi<CharacterRequest, BaseResponse<Character>>(
    {
      path: 'character',
      method: 'POST',
    },
    config,
  );
