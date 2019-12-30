const basicAuth = 'Basic ' + btoa('admin:district');
const headers = new Headers({
    'Authorization': basicAuth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});

class Api {
    config = {
        baseUrl: '',
    };

    setConfig = config => {
        this.config = config;
    };

    getDimensions = id => {
        return fetch(`${this.config.baseUrl}/dimensions/`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };
    getCharts = ()=>{
        return fetch(`${this.config.baseUrl}/charts.json?paging=false/R3N0O5KywZe/  `,{  method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers,})
        .catch(error => error)
        .then(response=>{return response.json()})
    }

    getDashboards=()=>{
        return fetch(`${this.config.baseUrl}/dashboards.json?paging=false&fields=*`, {method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers,}).catch(error=>error)
        .then(response=>response.json())
    }
    


}

export default new Api();
