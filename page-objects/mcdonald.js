//const helpers = require("../runtime/helpers");
module.exports = {

    url: 'http://www.mcdonalds.com/',

    elements: {
        OrderNow: '//*[@id="button-ordernow"]',
        McApplmage: '//*[@id="ui-id-1"]/form/div[2]/fieldset/ul/li[1]/label/div[1]/img'
  
    },
    clickElement: async function(objectKey) {
        var selector = page.mcdonald.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: async function(objectKey) {
        var selector = page.mcdonald.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

};