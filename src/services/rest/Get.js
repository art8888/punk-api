const Get = (link) => {
    return fetch(`${link}`).then(response => {
        return response.json();
    })
    .catch(error => alert(error));
}

export default Get;