import TicketForm from "./TicketForm";
import TicketService from "./TicketService";
import TicketView from "./TicketView";
import deleteTicket from "./deleteTicket";
import editFormProcess from "./editFormProcess";
import editCheckboxState from "./editCheckboxState";
import handleFormSubmit from "./handleFormSubmit";
import validate from "./validate";

(async () => {
  const table = document.querySelector("table");
  const body = document.querySelector("body");
  const container = document.querySelector(".container");
  const ticketView = new TicketView(table);
  const service = new TicketService();
  const list = service.list();

  let addTicket = document.querySelector(".add__ticket");
  let ticketForm = new TicketForm();
  let parent, ticketId;

  try {
    let data = await list;

    if (data.length === 0) {
      container.style.position = "relative";
      container.style.marginTop = "0px";
      addTicket.style.position = "absolute";
      addTicket.style.top = "1px";
      addTicket.style.right = "1px";
    }

    ticketView.allTickets(data);

    body.addEventListener("click", async (e) => {
      if (e.target.className === "cancel") {
        ticketForm.remove();
      } else if (e.target.className === "verification") {
        let valid = validate(e);
        if (valid == false) {
          alert("Данные не прошли валидацию. \n Попробуйте ещё раз.");
          ticketForm.remove();
        } else if (valid == true) {
          await handleFormSubmit(e, service);
          ticketForm.remove();
        }
      } else if (e.target.className === "delete__record") {
        await deleteTicket(service, parent);
        ticketForm.remove();
      } else if (e.target.className === "redact") {
        let valid = validate(e);
        if (valid == false) {
          alert("Данные не прошли валидацию. \n Попробуйте ещё раз.");
          ticketForm.remove();
        } else if (valid == true) {
          await editFormProcess(e, service, ticketId);
          ticketForm.remove();
        }
      }
    });

    table.addEventListener("click", async (e) => {
      parent = e.target.closest(".table__row");
      ticketId = parent.querySelector(".id");
      let response = await service.get(ticketId.textContent);
      let nextNode = parent.nextElementSibling;

      if (e.target.className === "name" || e.target.className === "created") {
        if (response.description !== "" && nextNode == null) {
          parent.insertAdjacentHTML(
            "afterend",
            `<tr class="description"><td class="text__description" colspan="5">${response.description}</td></tr>`
          );
        } else if (nextNode === null) {
          return;
        } else {
          nextNode.remove();
        }
      } else if (e.target.className === "delete__ticket") {
        ticketForm.delete();
        ticketForm.show();
      } else if (e.target.className === "edit__ticket") {
        ticketForm.edit(response);
        ticketForm.show();
      } else if (e.target.className === "check") {
        if (e.target.checked) {
          editCheckboxState(service, ticketId, true);
        } else {
          editCheckboxState(service, ticketId, false);
        }
      }
    });

    addTicket.addEventListener("click", () => {
      ticketForm.create();
      ticketForm.show();
    });
  } catch (err) {
    console.error(err);
  }
})();
