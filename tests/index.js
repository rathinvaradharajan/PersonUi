module.exports = {
  'Demo test' : function (browser) {
    browser.url('http://localhost:4000');
    browser.waitForElementVisible('body', 1000)
      .assert.title('Profile');
    browser.expect.element('#submitButton').text.to.equal('Submit').to.be.visible.before(100);
    browser.expect.element('a').text.to.equal('Profiles').to.be.visible.before(100);
    browser.expect.element('h1').text.to.equal('New User').to.be.visible.before(100);
    validateInputFields(browser);
    browser.click('a')
      .waitForElementVisible('body', 1000)
      .assert.urlContains('/users');
    validateInputFields(browser);
    browser.expect.element("#deleteButton").text.to.equal('Delete this User').to.be.visible.before(100);
    browser.expect.element('#submitButton').text.to.equal('Submit').to.be.visible.before(100);
    browser.expect.element('#backButton').text.to.equal('Back').to.be.visible.before(100);
    browser.click('#backButton')
      .waitForElementVisible('body',1000)
      .expect.element('h1').text.to.equal('New User');
    browser.end();
  }
};

function validateInputFields(browser) {
  var fields = ['#name','#age','#location','#dob'];
  fields.forEach(function (field) {
    browser.assert.elementPresent(field)
  });
}
