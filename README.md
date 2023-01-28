# vndb-api-Kana

An API wrapper for [VNDB HTTP API(v2)](https://api.vndb.org/kana) that allows you to interact with the VNDB API in a type-safe manner using TypeScript.

## Features
- Strong type checking for all the parameters passed in when making requests to the VNDB API, which ensures that your code is correct and reduces the chances of runtime errors.

- TODO

## Installation
To install this package, simply run the following command:

```bash
npm install vndb-api-kana axios
```
## Usage


```typescript
import Kana from 'vndb-api-kana';

const kana = new Kana({
  baseURL: 'https://api.vndbproxy.org/kana'
});

kana.setAuth(TOKEN);

kana.apis
  .getVn({
    filters: ['search', '=', 'ハミダシクリエイティブ凸'],
    fields: ['id', 'title', 'image.id'],
  })
  .then((res) => {
    console.log(
      res.results.map((item) =>
        item.image?.map((image) => image.id).join(', '),
      ),
    );
  });
  .catch((e) => {
    // catch axios error
  });

```

You can also use the API directly by importing the `api` object and types from the package.


```typescript
import { api, CharacterFilters, Character } from 'vndb-api-kana';

const characterFilters: CharacterFilters = [
  'and',
  ['weight', '>', 200],
  ['height', '<', 140],
];


(async () => {
  try {
    const res = await api.getCharacter({
      filters: characterFilters,
      fields: ['id', 'traits.name'],
    });
    console.log(res);
  } catch (e) {
    // do something
  }
})();

// others function:
const renderChar = (c: Character) => {
  // ...
};

```

## Images

![](https://raw.githubusercontent.com/TachibanaKimika/vndb-api-kana/master/image/01.png)