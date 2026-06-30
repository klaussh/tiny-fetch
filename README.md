# tiny-fetch

Minimal fetch wrapper with retry and timeout support for Node.js and browsers.

## Features

- **Retry with exponential backoff**
- **Configurable timeout**
- **Request/response interceptors**
- **Zero dependencies**
- **TypeScript support**

## Installation

```bash
npm install tiny-fetch
```

## Usage

```javascript
import { fetch } from 'tiny-fetch';

// Basic usage
const data = await fetch('https://api.example.com/data');

// With options
const data = await fetch('https://api.example.com/data', {
  method: 'POST',
  body: JSON.stringify({ key: 'value' }),
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000,
  retries: 3,
});
```

## API

### `fetch(url, options?)`

Options:
- `method` - HTTP method (GET, POST, etc.)
- `headers` - Request headers
- `body` - Request body
- `timeout` - Request timeout in ms (default: 30000)
- `retries` - Number of retries (default: 0)
- `retryDelay` - Delay between retries in ms (default: 1000)

## License

MIT
