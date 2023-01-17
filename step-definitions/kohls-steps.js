const helpers = require("../runtime/helpers")
module.exports = function () {

    this.Given(/I am on the kohls page$/, function () {
        return helpers.loadPage(page.kohls.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.kohls.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.kohls.elementExists(objectKey);
    });
};
