import { notify } from "@kyvg/vue3-notification";

export function notifyCreateSuccess(model) {
    return () => notify({
        title: 'Успех',
        text: `Успешно създаден ${model}. Рефрешнете страницата след няколко секунди.`,
        type: 'success',
        duration: 10000
    });
}