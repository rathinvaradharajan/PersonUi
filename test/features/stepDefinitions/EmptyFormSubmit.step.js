const {client} = require('nightwatch-cucumber');
const {Given, Then} = require('cucumber');

Given(/^I click submit on localhost:4000$/, () =>{
  return client.url('http://localhost:4000').click('#submitButton')
    .waitForElementVisible('body',1000);
});

Then(/^"([^"]*)" title appears$/, (title) =>{
  return client.expect.element('h1').text.to.equal(title).to.be.visible.before(100);
});

Then(/^Toastr appears$/,() =>{
  return client.expect.elementPresent('toastr');
});
