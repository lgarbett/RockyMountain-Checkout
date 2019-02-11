module.exports = (rmObject, keyword, text, search, product) => {
    rmObject
    .click(keyword)
    .setValue('@keyword', text)
    .click(search)
    .click(product)
    .click('@addToCart')

}
