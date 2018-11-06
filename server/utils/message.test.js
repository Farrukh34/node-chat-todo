var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Joe90';
    var text = 'I have to become a jet fighter pilot';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  })

});

describe('generateLocationMessage', () => {
  it('should generate correct location message', () => {
    var from = 'Andy';
    var lat = 15;
    var lon = 19;
    var message = generateLocationMessage(from, lat, lon);

    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toBe(from);
    expect(message.url).toBe(`https://google.com/maps?q=${lat},${lon}`);
  });
});
