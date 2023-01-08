const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^ I am on the McDonald page$/, function () {
        return helpers.loadPage(page.mcdonald.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.mcdonald.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.mcdonald.elementExists(objectKey);
    });
};
