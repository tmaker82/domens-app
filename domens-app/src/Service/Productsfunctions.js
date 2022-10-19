import axios from 'axios';

/*
export class ProductService {
    getProductsSmall() {
        return axios.get('assets/demo/data/products-small.json').then(res => res.data.data);
    }
    getProducts() {
        return axios.get('assets/demo/data/products.json').then(res => res.data.data);
    }
    getProductsWithOrdersSmall() {
        return axios.get('assets/demo/data/products-orders-small.json').then(res => res.data.data);
    }
}
*/

export class ProductService {
    //https://tonus.bitrix24.ru/rest/13/4k1c1ofriut2l254/crm.product.list.json

    getProductList() {
        const domen = 'https://tonus.bitrix24.ru';
        const method_type = 'rest'
        const userId = 13;
        const token = '4k1c1ofriut2l254';
        const method = 'crm.product.list.json';
        const rest_url = domen + '/' + method_type + '/' + userId + '/' + token + '/' + method;
        const productData = {};
        let $finish = false;

        return  axios.get(rest_url, {params: {start: '0'}})
            .then((res) => res.data.result)

    }
}

