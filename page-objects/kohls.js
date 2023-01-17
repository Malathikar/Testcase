//const helpers = require("../runtime/helpers");
module.exports = {
    url: 'http://www.kohls.com/',
    elements: {
        shopbycategory: '//*[@id="top-nav-left"]/li/a/p/span',
        clearance: '//*[@id="navigation"]/li[1]/h2/a',
        clearancetxt: '//*[@id="vn-box"]/h3'
    },
    clickElement: async function (objectKey) {
        var selector = page.kohls.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: async function (objectKey) {
        var selector = page.kohls.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
};