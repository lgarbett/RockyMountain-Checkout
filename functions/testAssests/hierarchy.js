module.exports = (rmObject, category, type, product) => {
        rmObject
        .click(category)
        .click(type)
        .click(product)
        .waitForElementVisible('@addToCart', 5000)
        .click('@addToCart')

}
