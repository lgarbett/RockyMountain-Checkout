var rmObject = {}

let clickByText = require('../functions/testAssests/clickByText')

let hierarchy = require('../functions/testAssests/hierarchy')

let keyword = require('../functions/testAssests/keyword')

module.exports = {
    beforeEach: browser => {
        rmObject = browser.page.pageObjects()
        rmObject.navigate()
            .waitForElementPresent('@keyword', 10000)
    },
    after: browser => {
        browser.end()
    },

    'Add product through hierarchy': browser => {
        hierarchy(rmObject, '@casual', '@leftNav', '@selectProduct')

    },

    'Add product through Keyword Search': browser => {
        keyword(rmObject, '@keyword', 'Maxima', '@keywordSearch', '#Families > div:nth-child(1) > a > span.sli_title')
    },

    'Add product to card through vehicle search': browser => {
        rmObject.api.useXpath()
        rmObject
            .click('//span[@data-seltype="VehicleTypes"]')
            .click('//a[text()="ATV"]')
        browser.pause(1000)
        rmObject
            .click('//span[@data-seltype="Years"]')
            .click('//a[text()="2019"]')
        browser.pause(1000)
        rmObject
            .click('//span[@data-seltype="Makes"]')
            .click('//a[text()="CAN-AM"]')
        browser.pause(1000)
        rmObject
            .click('//span[@data-seltype="Models"]')
            .click('//a[text()="DS250"]')
        browser.pause(1000)
        rmObject
        rmObject.api.useCss()
        rmObject
            .click('#Families > div:nth-child(1)')
            .click('@addToCart')
    },

    'Remove Product From Cart': browser => {
        keyword(rmObject, '@keyword', 'Maxima', '@keywordSearch', '#Families > div:nth-child(1) > a > span.sli_title')
        rmObject
        browser.pause(1000)
        rmObject
            .click('@cartIcon')
            .click('.editBtn')
            
    },

    'Increase and Decrease Qty of Product in Cart': browser => {
        hierarchy(rmObject, '@casual', '@leftNav', '@selectProduct')
        rmObject
        browser.pause(1000)
        rmObject
            .click('@cartIcon')
            .click('.icn-plus')
        .waitForElementPresent('.shoppingCartHeader', 1000)
            .click('.icn-minus')
    },

    'Guest Checkout With Credit Card': browser => {
        keyword(rmObject, '@keyword', 'Maxima', '@keywordSearch', '#Families > div:nth-child(1) > a > span.sli_title')
        rmObject
        browser.pause(1000)
        rmObject
        .click('@cartIcon')
        browser.pause(1000)
        rmObject
            .click('@proceedToCheckout')
            .setValue('@firstName', 'Lyndsay')
            .setValue('@lastName', 'Test')
            .setValue('@address', '123 Test St')
            .setValue('@zip', '84628')
            .click('@city')
        browser.pause(1000)
        rmObject
            .click('.okBtn')
            .click('@selectShipMethod')
        browser.pause(1000)
        rmObject
            .waitForElementPresent('.disclosure', 2000)
            rmObject
            .click('input[value="Use it Anyway"]')
        browser.pause(1000)
        rmObject
            .click('@enterPayment')
        browser.pause(1000)
        rmObject
            .setValue('@cardNum', '4111111111111111')
            .setValue('@month', '12')
            .setValue('@year', '2029')
            .setValue('@cvv', '123')
            .setValue('[name="guestNotificationPanel:guestEmail"]', 'lyndsayg@rmatv.com')
            .setValue('[name="guestNotificationPanel:guestPhone"]', '1234567890')
            .click('@review')
        browser.pause(1000)
        rmObject
            .click('@placeOrder')
        browser.pause(5000)
        rmObject
            .expect.element('@thankYou').text.to.equal("Thank you for your order!")
    },

    'Guest Checkout with Offercode and Credit Card': browser => {
        rmObject.api.useXpath()
        rmObject
            .click('//span[@data-seltype="VehicleTypes"]')
            .click('//a[text()="ATV"]')
        browser.pause(1000)
        rmObject
            .click('//span[@data-seltype="Years"]')
            .click('//a[text()="2019"]')
        browser.pause(1000)
        rmObject
            .click('//span[@data-seltype="Makes"]')
            .click('//a[text()="CAN-AM"]')
        browser.pause(1000)
        rmObject
            .click('//span[@data-seltype="Models"]')
            .click('//a[text()="DS250"]')
        browser.pause(1000)
        rmObject
        rmObject.api.useCss()
        rmObject
            .click('#Families > div:nth-child(1)')
            .click('@addToCart')
        browser.pause(1000)
        rmObject
            .click('@cartIcon')
        browser.pause(1000)
        rmObject
            .click('@proceedToCheckout')
            .setValue('@firstName', 'Lyndsay')
            .setValue('@lastName', 'Test')
            .setValue('@address', '123 Test St')
            .setValue('@zip', '84628')
            .click('@city')
        browser.pause(1000)
        rmObject
            .click('.okBtn')
            .click('@selectShipMethod')
        browser.pause(1000)
        rmObject
            .click('input[value="Use it Anyway"]')
        browser.pause(1000)
        rmObject
            .click('@enterPayment')
        browser.pause(1000)
        rmObject
            .setValue('@offerCode', 'test10p')
            .click('@offerCodeBtn')
        browser.pause(1000)
        rmObject
            .setValue('@cardNum', '4111111111111111')
            .setValue('@month', '12')
            .setValue('@year', '2029')
            .setValue('@cvv', '123')
            .setValue('[name="guestNotificationPanel:guestEmail"]', 'lyndsayg@rmatv.com')
            .setValue('[name="guestNotificationPanel:guestPhone"]', '1234567890')
            .click('@review')
        browser.pause(1000)
        rmObject
            .click('@placeOrder')
        browser.pause(5000)
        rmObject
            .expect.element('.discountName').text.to.equal("10% off order")
    },

    'Logged In Checkout with Credit Card': browser => {
        keyword(rmObject, '@keyword', 'Maxima', '@keywordSearch', '#Families > div:nth-child(1) > a > span.sli_title')
        rmObject
        browser.pause(1000)
        rmObject
            .click('@cartIcon')
        browser.pause(1000)
        rmObject
            .click('@proceedToCheckout')
            .click('@logIn')
            .setValue('@email', 'lyndsayg@rmatv.com')
            .setValue('@password', 'Password')
            .click('@logInBtn')
            .click('@selectShipMethod')
        browser.pause(1000)
        rmObject
            .waitForElementPresent('.disclosure', 1000)
        rmObject
            .click('input[value="Use it Anyway"]')
        browser.pause(1000)
        rmObject
            .click('@enterPayment')
        browser.pause(1000)
        rmObject
            .setValue('@cardNum', '4111111111111111')
            .setValue('@month', '12')
            .setValue('@year', '2029')
            .setValue('@cvv', '123')
            .click('@review')
        browser.pause(1000)
        rmObject
            .click('@placeOrder')
        browser.pause(5000)
        rmObject
            .expect.element('@thankYou').text.to.equal("Thank you for your order!")
    },

    'Logged In Checkout with Gift Card and Credit Card': browser => {
        hierarchy(rmObject, '@casual', '@leftNav', '@selectProduct')
        browser.pause(1000)
        rmObject
            .click('@cartIcon')
        browser.pause(1000)
        rmObject
            .click('@proceedToCheckout')
            .click('@logIn')
            .setValue('@email', 'lyndsayg@rmatv.com')
            .setValue('@password', 'Password')
            .click('@logInBtn')
            .click('@selectShipMethod')
        browser.pause(1000)
        rmObject
            .waitForElementPresent('.disclosure', 1000)
        rmObject
            .click('input[value="Use it Anyway"]')
        browser.pause(1000)
        rmObject
            .click('@enterPayment')
        browser.pause(1000)
        rmObject
            .setValue('@giftCert', '1112223334440011')
            .click('@giftCertBtn')
        browser.pause(1000)
        rmObject
            .setValue('@cardNum', '4111111111111111')
            .setValue('@month', '12')
            .setValue('@year', '2029')
            .setValue('@cvv', '123')
            .click('@review')
        browser.pause(1000)
        rmObject
            .click('@placeOrder')
        browser.pause(5000)
        rmObject
            .expect.element('.payMethodRp').text.to.contain("Gift Card Ending")
    },

    'Un-Successful Order': browser => {
        keyword(rmObject, '@keyword', 'Maxima', '@keywordSearch', '#Families > div:nth-child(1) > a > span.sli_title')
            .click('@cartIcon')
        browser.pause(1000)
        rmObject
            .click('@proceedToCheckout')
            .click('@logIn')
            .setValue('@email', 'lyndsayg@rmatv.com')
            .setValue('@password', 'Password')
            .click('@logInBtn')
            .click('@selectShipMethod')
        browser.pause(1000)
        rmObject
            .waitForElementPresent('.disclosure', 1000)
        rmObject
            .click('input[value="Use it Anyway"]')
        browser.pause(1000)
        rmObject
            .click('@enterPayment')
        browser.pause(1000)
        rmObject
            .setValue('@cardNum', '4111111111111111')
            .setValue('@month', '12')
            .setValue('@year', '2029')
            .setValue('@cvv', '122')
            .click('@review')
        browser.pause(1000)
        rmObject
            .click('@placeOrder')
        browser.pause(5000)
        rmObject
            .expect.element('.feedbackPanel').text.to.contain("Card authorization failed")
    },

}
