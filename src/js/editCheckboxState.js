/**
 *  Функция изменения отметки о выполнении каждого тикета.
 * */
export default async function editCheckboxState(app, ticketId, bool) {
    let url = `id=${ticketId.textContent}&status=${bool}`;
    const response = await app.update(url);
    return response;
}
