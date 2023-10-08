/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
export default class TicketView {
  constructor(table) {
    if (!(table instanceof HTMLElement)) {
      throw new Error("This is not HTML element!");
    }
    this.table = table;
  }

  allTickets(list) {
    for (let index = 0; index < list.length; index++) {
      this.table.innerHTML += `
      <tr class ="table__row">
      <td class="id">${list[index].id}</td>
      <td class="status"><input type="checkbox" class="check"></td>
      <td class="name">${list[index].name}</td>
      <td class="created">${list[index].created}</td>
      <td class="edit"><button type="button" class="edit__ticket">&#9998;</button></td>
      <td class="delete"><button type="button" class="delete__ticket">&#10005;</button></td>
      </tr>
      `;
      const checkbox = document.getElementsByTagName("input");
      for (let i = index; i < checkbox.length; i++) {
        if (list[i] !== undefined && list[i].status) {
          checkbox[i].setAttribute("checked", "checked");
        }
      }
    }
  }
}
