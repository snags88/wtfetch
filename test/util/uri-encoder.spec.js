import { expect } from 'chai';

import { param } from 'util/uri-encoder';

describe('param()', () => {
  describe('Array input', () => {
    it('returns empty string for empty Array', () => {
      expect(param([])).to.equal('');
    });

    it('returns query string with array indicies mapped to value', () => {
      expect(param(['test', 'array'])).to.equal('0=test&1=array');
    });
  });

  describe('Object input', () => {
    it('returns empty string for empty Object', () => {
      expect(param({})).to.equal('');
    });

    it('returns query string with keys mapped to the value', () => {
      let paramObj = {
        test: 123,
        key: 'value'
      }

      expect(param(paramObj)).to.equal('test=123&key=value');
    });
  });

  describe('Special characters', () => {
    it('encodes specical characters', () => {
      expect(param({special: 'ch@r@c+er$'})).to.equal('special=ch%40r%40c%2Ber%24')
    });
  });
});
