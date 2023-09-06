/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */
class TicketService {
  async list() {
    let url = 'http://localhost:7070?method=allTickets';
    let response = await fetch(url);
    if (response.ok) {
      let tickets = await response.json();
      console.log(tickets);
      return tickets;
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  }

  async get(id) {
    let url = `http://localhost:7070?method=ticketById&id=${id}`;
    let response = await fetch(url);
    if (response.ok) {    
      let tickets = await response.json();
      console.log(tickets);
      return tickets;
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  }

  async create(data) {
    let url = `http://localhost:7070?method=createTicket&${data}`;
    let response = await fetch(url, {
      method: 'POST',
    });
    if (response.ok) {   
      let result = await response.json();
      console.log(result);
      return result;
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
};

  async update(data) {
    let url = `http://localhost:7070?method=updateById&${data}`;
    let response = await fetch(url, {
      method: 'PATCH',
    });
    if (response.ok) {  
      let result = await response.json();
      console.log(result);
      return result;
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  }

  async delete(id) {
    let url = `http://localhost:7070?method=deleteById&${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
    });
    console.log(response.status);
    return response.status;
  }
}

let ex = new TicketService();
ex.list();
