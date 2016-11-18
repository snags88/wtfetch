import { expect } from 'chai';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';

import { get, post, patch, deleteRequest } from 'index';

describe('fetch request wrappers', () => {
  afterEach( () => {
    fetchMock.restore();
  });

  describe('get()', () => {
    beforeEach( () => {
      fetchMock.get(/google\.com/, 200)
    });

    it('makes request with url argument', () => {
      const url = 'https://www.google.com';
      get(url);

      expect(fetchMock.lastUrl()).to.equal(url);
    });

    it('makes request with query string', () => {
      const url = 'https://www.google.com';
      get(url, {
        data: { q: 'hello world' }
      });

      expect(fetchMock.lastUrl()).to.equal(url + '?q=hello+world');
    });
  });

  describe('post()', () => {
    beforeEach( () => {
      fetchMock.post(/test\.com/, 200)
    });

    it('makes request to the url', () => {
      const url = 'https://www.test.com'
          , data = { q: 'hello world' }
          ;

      post(url, { data: data });
      expect(fetchMock.lastUrl()).to.equal(url);
    });

    it('makes request with body', () => {
      const url = 'https://www.test.com'
          , data = { q: 'hello world' }
          ;

      post(url, { data: data });

      const lastOptions = fetchMock.lastOptions();
      expect(lastOptions.body).to.equal(JSON.stringify(data));
    });
  });

  describe('patch()', () => {
    beforeEach( () => {
      fetchMock.patch(/test\.com/, 200)
    });

    it('makes request to the url', () => {
      const url = 'https://www.test.com'
          , data = { q: 'hello world' }
          ;

      patch(url, { data: data });
      expect(fetchMock.lastUrl()).to.equal(url);
    });

    it('makes request with body', () => {
      const url = 'https://www.test.com'
          , data = { q: 'hello world' }
          ;

      patch(url, { data: data });

      const lastOptions = fetchMock.lastOptions();
      expect(lastOptions.body).to.equal(JSON.stringify(data));
    });
  });

  describe('deleteRequest()', () => {
    beforeEach( () => {
      fetchMock.delete(/test\.com/, 200)
    });

    it('makes request to the url', () => {
      const url = 'https://www.test.com'
          , data = { q: 'hello world' }
          ;

      deleteRequest(url, { data: data });
      expect(fetchMock.lastUrl()).to.equal(url);
    });

    it('makes request with body', () => {
      const url = 'https://www.test.com'
          , data = { q: 'hello world' }
          ;

      deleteRequest(url, { data: data });

      const lastOptions = fetchMock.lastOptions();
      expect(lastOptions.body).to.equal(JSON.stringify(data));
    });
  });
});
