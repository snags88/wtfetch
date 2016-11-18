# wtfetch
A wrapper around the fetch API to simplify making HTTP requests. Each
HTTP method has its own function that can be imported or required into
wherever needed.

## Installation
- `npm install --save wtfetch`

## Usage
```js
// Import or require functions from library
import { get, post, patch, deleteRequest } from 'wtfetch'

// Use the function to make HTTP request
get('www.google.com', { data: {q: 'search term'}})
```

## Default Configurations
By default, each request will have the following configurations:

```js
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'same-origin' // enables cookies
```

Note that these can be overridden by passing the same key to the options
of the request function.

```js
get('www.example.com', {
  headers: {
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }
});
```

## Request Function Return Behavior
- Each successful request will return a promise chain with the **json** of the response body.
- Each unsuccessful request will throw an unhandled exception that must be handled outside of the library.

## API
This library exposes 4 functions to make HTTP requests:
- `get`
- `post`
- `patch`
- `deleteRequest`

### `get(url [, options])`
- Url should not include the query strings, instead query strings should be passed in as a
  js object in the options with the key `data`
- In the options, use the key `data` with a js object to send parameters to the server.
  Useful for search queries, filters, etc. Note that this supports nested objects
- Additional option keys will be sent as is. Make sure the option provided is valid in this
  doc: https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch#Parameters

__Example__
```js
// with ES6 syntax
import { get } from 'wtfetch'

get('www.example.com', {
  data: {
    q: 'hello world'
  }
}).then((bodyJSON) => {
  console.log(bodyJSON);
}).catch((e) => {
  console.log('Oops there was an error', e);
})

// sends get request to www.example.com?q=hello+world
// logs out the response or the error
```

### `post(url [, options])`
- In the options, use the key `data` with a js object to send parameters to the server.
- Additional option keys will be sent as is. Make sure the option provided is valid in this
  doc: https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch#Parameters

__Example__
```js
// with ES6 syntax
import { post } from 'wtfetch'

post('www.example.com/api/v1/users', {
  data: {
    username: 'test user'
  }
}).then((bodyJSON) => {
  console.log(bodyJSON);
}).catch((e) => {
  console.log('Oops there was an error', e);
})
```

### `patch(url [, options])`
- In the options, use the key `data` with a js object to send parameters to the server.
- Additional option keys will be sent as is. Make sure the option provided is valid in this
  doc: https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch#Parameters

__Example__
```js
// with ES6 syntax
import { patch } from 'wtfetch'

patch('www.example.com/api/v1/users/1', {
  data: {
    email: 'myNewEmail@email.com'
  }
}).then((bodyJSON) => {
  console.log(bodyJSON);
}).catch((e) => {
  console.log('Oops there was an error', e);
})
```

### `deleteRequest(url [, options])`
- In the options, use the key `data` with a js object to send parameters to the server.
- Additional option keys will be sent as is. Make sure the option provided is valid in this
  doc: https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch#Parameters

__Example__
```js
// with ES6 syntax
import { deleteRequest } from 'wtfetch'

deleteRequest('www.example.com/api/v1/users/1')
  .then((bodyJSON) => {
    console.log(bodyJSON);
  }).catch((e) => {
    console.log('Oops there was an error', e);
  })
```

## Dependencies
- [`whatwg-fetch` v2.0](https://github.com/github/fetch/releases/tag/v2.0.0) for `fetch` polyfill.

## Testing
- [Mocha](https://mochajs.org) as the test runner.
- [Chai](http://chaijs.com/) as the assertion library.
- [Sinon](http://sinonjs.org/) to spy on stuff.
- [fetch-mock](https://github.com/wheresrhys/fetch-mock) for mocking
  HTTP requests.
