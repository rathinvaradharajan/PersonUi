const {client} = require('nightwatch-cucumber');
const {Given, Then} = require('cucumber');

Given(/^I go to localhost:4000 $/, () =>{
  return client.url('http://localhost:4000')
    .waitForElementVisible('body',1000);
});

Then(/^"([^"]*)" title appears$/, (title) =>{
  return client.expect.element('h1').text.to.equal(title).to.be.visible.before(100);
});

Then(/^The Input form for the details exists$/,() =>{
    return client.expect.elementPresent('#name');
});
