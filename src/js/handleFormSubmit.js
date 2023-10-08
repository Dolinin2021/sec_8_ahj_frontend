import serializeForm from "./serializeForm";

/**
 *  Функция обработки данных формы отправки.
 * */
export default async function handleFormSubmit(event, app) {
  const parent = event.target.closest("form");
  const data = serializeForm(parent);
  let url = "";
  data.forEach((element) => {
    url = url + element.name + "=" + element.value + "&";
  });
  url = url.slice(0, -1);
  const response = await app.create(url);
  return response;
}
