export class ProductService {

    getActions() {
        return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }
}
