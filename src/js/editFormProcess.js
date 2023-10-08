import serializeForm from "./serializeForm";

/**
 *  Функция изменения тикета.
 * */
export default async function editFormProcess(event, app, ticketId) {
    const parent = event.target.closest('form');
    const data = serializeForm(parent);
    let url = `id=${ticketId.textContent}&`;
    data.forEach((element) => {
        if (element.value !== '') {
            url = url + element.name + '=' + element.value + '&';
        } else {
            url = url + element.name + '=' + '' + '&';
        }
    });
    url = url.slice(0, -1);
    const response = await app.update(url);
    return response;
}
