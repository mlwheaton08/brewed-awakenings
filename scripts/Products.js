import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener('click', (e) => {
    const itemClicked = e.target;
    if (itemClicked.id.startsWith('product')) {
        const productIdArray = itemClicked.id.split('--')
        const productId = parseInt(productIdArray[1])
        for (const product of products) {
            if (product.id === productId) {
                alert(`${product.name} costs $${product.price.toFixed(2)}`)
            }
        }
    }
})