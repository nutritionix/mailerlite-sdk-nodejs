'use strict';

var expect = require('expect.js');

var MailerLite = require('..');
var Client = new MailerLite();

describe('Lists', () => {
  it('should return at least one list', (done) => {
    Client.Lists.getAll()
    .then((data) => {
      expect(data).not.to.be(undefined);
      expect(data).to.have.property('Results');
      expect(data.Results.length).to.be.above(0);
      done();
    });
  });
});
