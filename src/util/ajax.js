import 'whatwg-fetch';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseJSON(response) {
    return response.json();
}

function checkCode(json) {
    console.log(json);
}

function getData(json) {
    return json.data;
}

const request = async (url, method = 'get') => {
    try {
        const res = await fetch(url),
            status = await checkStatus(res),
            json = await res.json(),
            code = await checkCode(json),
            data = await getData(json);
        return data;
    } catch (e) {
        return {};
        // TODO: 错误处理
    }
};

function getRequest(url) {
    fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => data)
        .catch((error) => {
	        console.log('request failed', error);
        });
}
export {
    request,
    getRequest,
};
