/**
 *  Класс для создания формы создания нового тикета
 * */
export default class TicketForm {
  constructor() {
    this.form = document.createElement('form');
    this.body = document.querySelector('body');
  }

  create() {
    this.form.className = 'createTicket';
    this.form.method = 'post';
    this.form.innerHTML = `
      <fieldset>
        <legend>Добавить тикет</legend>
        <label>
          Краткое описание
          <input name="name" type="text" required="true">
        </label>
        <br>
        <label>
          Подробное описание
          <textarea name="description" cols="40" rows="3" required="true"></textarea>
        </label>
      </fieldset>
      <button type="button" class="cancel">Отмена</button> 
      <button type="button" class="verification">ОК</button>
    `
    this.body.appendChild(this.form);
  }

  edit(response) {
    this.form.className = 'editTicket';
    this.form.method = 'patch';
    this.form.innerHTML = `
      <fieldset>
        <legend>Изменить тикет</legend>
        <label>
          Краткое описание
          <input name="name" type="text" value="${response.name}">
        </label>
        <br>
        <label>
          Подробное описание
          <textarea name="description" cols="40" rows="3">${response.description}</textarea>
        </label>
      </fieldset>
      <button type="button" class="cancel">Отмена</button> 
      <button type="button" class="redact">ОК</button> 
    `
    this.body.appendChild(this.form);
  }

  delete() {
    this.form.className = 'deleteTicket';
    this.form.method = 'delete';
    this.form.innerHTML = `
      <fieldset>
        <legend>Удалить тикет</legend>
        <label>
          Вы уверены, что хотите удалить тикет? \n Это действие необратимо.
        </label>
      <button type="button" class="cancel">Отмена</button> 
      <button type="button" class="delete__record">ОК</button> 
    `
    this.body.appendChild(this.form);
  }

  show() {
    this.form.style.display = 'block';
    this.form.style.position = 'absolute';
    this.form.style.top = 0;
    this.form.style.bottom = 0;
    this.form.style.left = 0;
    this.form.style.right = 0;
    this.form.style.margin = 'auto';
  }

  remove() {
    this.body.removeChild(this.form);
  }
}
