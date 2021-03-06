import 'whatwg-fetch';

import { param } from './util/uri-encoder';
import { checkStatus, parseJSON } from './util/response-helpers';

const get = (url, options={}) => {
  let requestUrl = url;
  const data = options.data;
  delete options.data;

  if (data) { requestUrl = url + '?' + param(data); }

  const requestOptions = Object.assign({},
    options,
    { method: 'GET' }
  );

  return (
    fetch(requestUrl, requestOptions)
      .then(checkStatus)
      .then(parseJSON)
  );
}

const post = (url, options={}) => {
  const data = options.data;
  delete options.data;

  const requestOptions = Object.assign({},
    options,
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  );

  return (
    fetch(url, requestOptions)
      .then(checkStatus)
      .then(parseJSON)
  );
}

const patch = (url, options={}) => {
  const data = options.data;
  delete options.data;

  const requestOptions = Object.assign({},
    options,
    {
      method: 'PATCH',
      body: JSON.stringify(data)
    }
  );

  return (
    fetch(url, requestOptions)
      .then(checkStatus)
      .then(parseJSON)
  );
}

const deleteRequest = (url, options={}) => {
  const data = options.data;
  delete options.data;

  const requestOptions = Object.assign({},
    options,
    {
      method: 'DELETE',
      body: JSON.stringify(data)
    }
  );

  return (
    fetch(url, requestOptions)
      .then(checkStatus)
      .then(parseJSON)
  );
}

export { get, post, patch, deleteRequest };
