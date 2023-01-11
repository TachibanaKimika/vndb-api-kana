# vndb-api-Kana

## How To Use
```typescript
import Kana from 'vndb-api-kana';

const kana = new Kana();

kana.apis.gerVn({
  filters: ['search', '=', 'ハミダシクリエイティブ凸'],
  fields: ['id', 'title', 'titles.title']
}).then((res) => /** do something */)
```