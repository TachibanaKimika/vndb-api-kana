import * as vn from './vn';
import * as character from './character';
import * as release from './release';
import * as tag from './tag';
import * as producer from './producer';

export default {
  ...vn,
  ...release,
  ...tag,
  ...producer,
  ...character,
};
