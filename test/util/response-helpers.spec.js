import { expect } from 'chai';
import sinon from 'sinon';

import { checkStatus, parseJSON } from 'util/response-helpers';

describe('checkStatus()', () => {
  describe('a 2xx response', () => {
    const response = {
      status: 200,
      statusText: 'OK'
    }

    it('returns the response object', () => {
      expect(checkStatus(response)).to.equal(response)
    });
  });

  describe('a 3xx response', () => {
    const response = {
      status: 301,
      statusText: 'Moved Permanently'
    }

    it('throws an error', () => {
      expect(checkStatus.bind(this,response)).to.throw(Error);
    });
  });

  describe('a 4xx response', () => {
    const response = {
      status: 404,
      statusText: 'Resource Not Found'
    }

    it('throws an error', () => {
      expect(checkStatus.bind(this,response)).to.throw(Error);
    });
  });

  describe('a 5xx response', () => {
    const response = {
      status: 500,
      statusText: 'Internal Server Error'
    }

    it('throws an error', () => {
      expect(checkStatus.bind(this,response)).to.throw(Error);
    });
  });
});

describe('parseJSON()', () => {
  const spy = sinon.spy();
  const response = {
    json: spy
  }

  it('calls json() on the reponse object', () => {
    parseJSON(response);
    expect(spy.called).to.equal(true);
  });
});
