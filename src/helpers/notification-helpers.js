import { notify } from "@kyvg/vue3-notification";

export function notifyCreateSuccess(model) {
    return () => notify({
        title: 'Успех',
        text: `Успешно създаден ${model}. Рефрешнете страницата след няколко секунди.`,
        type: 'success',
        duration: 10000
    });
}

export function notifyDeleteSuccess(model) {
    return () => notify({
        title: 'Успех',
        text: `Успешно изтрит ${model}. Рефрешнете страницата след няколко секунди.`,
        type: 'success',
        duration: 10000
    });    
}

export function notifyDeleteException(model) {
    return () => notify({
        title: 'Грешка',
        text: `Неуспешно изтриване на ${model}. Проверете дали този ${model} не е рефериран от други записи.`,
        type: 'error',
        duration: 10000
    });    
}