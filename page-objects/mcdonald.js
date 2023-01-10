//const helpers = require("../runtime/helpers");
module.exports = {
    url: 'http://www.mcdonalds.com/',
    elements: {
        MyMcdonaldsreward: '//*[@id="container-1e52aa8d39"]/div/div/div/div/div[2]/div/div[2]/div/nav/ul/li[3]/a',
        MyMcdonald: '//*[@id="teaser-22e451c16e"]/div/div/div[1]/h2'
    },
    clickElement: async function (objectKey) {
        var selector = page.mcdonald.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: async function (objectKey) {
        var selector = page.mcdonald.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
};