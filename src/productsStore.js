//mouse: price_1PTMvF2LlhEBDikiyzDozOK6
//camera: price_1PTMzJ2LlhEBDikiKPNN110h
//watch: price_1PTN0V2LlhEBDikiplWPUlGm
//monitor: price_1PTN1H2LlhEBDiki8TSZsfYN
//AC: price_1PTN222LlhEBDikiu4IP6dOx

const productsArray = [
    {
        id: "price_1PTRrC2LlhEBDikiRE5h1QMs",
        title: "Mouse",
        price: "299"
    },
    {
        id: "price_1PTMzJ2LlhEBDikiKPNN110h",
        title: "Camera",
        price: "49999"
    },
    {
        id: "price_1PTN0V2LlhEBDikiplWPUlGm",
        title: "Watch",
        price: "2999"
    },
    {
        id: "price_1PTN1H2LlhEBDiki8TSZsfYN",
        title: "Monitor",
        price: "5999"
    },
    {
        id: "price_1PTN222LlhEBDikiu4IP6dOx",
        title: "AC",
        price: "79999"
    },
    
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };