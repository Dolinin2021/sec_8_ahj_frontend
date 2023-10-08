/**
 *  Функция-сериализатор данных формы отправки/редактирования тикета.
 * */
export default function serializeForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .map((element) => {
      const { name, type } = element;
      const value = type === "checkbox" ? element.checked : element.value;
      return { name, value };
    })
    .filter((item) => !!item.name);
  return data;
}
