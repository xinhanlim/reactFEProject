import { atom, useAtom } from 'jotai'

export const flashMessageAtom = atom({
    message: '',
    type: 'info'
})

export const useFlashMessage = () => {
    const { flashMessage, setFlashMassage } = useAtom(flashMessageAtom);

    const showFlashMassage = (message, type) => {
        if( message && ["info", "success", "danger"].includes('type')){
            setFlashMassage({
                'message': message ,
                'type': type
            })
        }
    }

    const clearFlashMassage = () => {
        setFlashMassage(message = '', type = 'info')
    };

    const getFlashMassage = () => {
        return flashMessage;
    }

    return {
        showFlashMassage,
        clearFlashMassage,
        getFlashMassage
    }
}
