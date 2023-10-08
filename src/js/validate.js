import serializeForm from "./serializeForm";

/**
 *  Функция валидации данных.
 * */
export default function validate(event) {
    const parent = event.target.closest('form');
    const data = serializeForm(parent);
    let message = '';
    data.forEach((element) => {
        if (element.value === '') {
            message += `Поле ${element.name} является пустым. \n `
        }
    });
    if (message !== '') {
        alert(message); 
        return false;    
    } else {
        return true;    
    }
}
