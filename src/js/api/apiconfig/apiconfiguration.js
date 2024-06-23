export class Router {
    constructor() {
        this.baseUrl = 'https://localhost:/';
    }

    async request(url, params, method = 'GET'){
        const options = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            // soon will add token here
        };

        if(params) {
            if(method === 'GET'){
                url += '?' + this.queryString(params);
            }else{
                options.body = JSON.stringify(params)
            }
        }

        try {
            const response = await fetch(this.baseUrl + url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error occurred during request:', error);
            throw error; 
        }
       
       
    }

    queryString(obj){
        return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
    }

    get(url, params){
        return this.request(url, params);
    }

    create(url, params) {
        return this.request(url, params, 'POST');
    }

    update(url, params){
        return this.request(url, params, 'PUT');
    }

    destroy(url, params){
        return this.request(url, params, 'DELETE');
    }
}
