/**
 *  Функция удаления тикета.
 * */
export default async function deleteTicket (service, parent) {
    let ticketId = parent.querySelector('.id');
    let url = `id=${ticketId.textContent}`;
    let response = await service.delete(url);
    return response;
}
