import { expect } from 'chai';
import sinon from 'sinon';

import { get, post, patch, deleteRequest } from 'index';

describe('fetch request wrappers', () => {
  beforeEach( () => {
    sinon.spy(window, 'fetch');
  });

  afterEach( () => {
    window.fetch.restore();
  });

  describe('get()', () => {
    it('runs the test', () => {
      expect(1).to.equal(1);
    });
  });
});
