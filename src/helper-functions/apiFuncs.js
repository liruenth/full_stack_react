var ApiFuncs = {

    callApi: async (url, req) => {
        //console.log(req);
        const response = req ? await fetch(url, req) : await fetch(url);
        const body = await response.json();

        if (response.status < 200 || response.status >= 300) throw Error(body.message);

        return body;
    }
}
export default ApiFuncs;