# Check-eleven

Check-eleven is a small, dependency-less package that checks if a Dutch government issued service number is valid.

## Installation

Use the package manager [npm](https://npmjs.com/) to install check-eleven.

```bash
npm install --save @indexsoftware/check-eleven
```

## Usage

ES6
```js
import checkEleven from '@indexsoftware/check-eleven';
import { check } from '@indexsoftware/check-eleven';
```

CommonJs
```js
const checkEleven = require('@indexsoftware/check-eleven');
const { check } = require('@indexsoftware/check-eleven');
```

After importing, usage is simple
```js
const result = checkEleven.check(178239812);

const result = check(178239812);
```

## Testing
Test coverage is provided by [Jest](https://jestjs.io/).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)