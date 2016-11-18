import 'whatwg-fetch';

import DefaultOptions from './default-options';
import { param } from './util/uri-encoder';
import { checkStatus, parseJSON } from './util/response-helpers';

export const get = (url, options={}) => {
  let requestUrl = url;
  const data = options.data;
  delete options.data;

  if (data) { requestUrl = url + '?' + param(data); }

  const requestOptions = Object.assign({},
    DefaultOptions,
    options,
    { method: 'GET' }
  );

  return (
    fetch(requestUrl, requestOptions)
      .then(checkStatus)
      .then(parseJSON)
  );
}

export const post = (url, options={}) => {
  const data = options.data;
  delete options.data;

  const requestOptions = Object.assign({},
    DefaultOptions,
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

export const patch = (url, options={}) => {
  const data = options.data;
  delete options.data;

  const requestOptions = Object.assign({},
    DefaultOptions,
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

export const deleteRequest = (url, options={}) => {
  const data = options.data;
  delete options.data;

  const requestOptions = Object.assign({},
    DefaultOptions,
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
