import { atom, useAtom } from 'jotai'

export const flashMessageAtom = atom({
    message: '',
    type: 'info'
})

export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    const showFlashMessage = (message, type) => {
        if( message && ["info", "success", "danger"].includes(type)){
            setFlashMessage(
                {
                'message': message,
                'type': type
                  }
             )
        }

        setTimeout(() => {
            clearFlashMessage();
        },3000)
    }

    const clearFlashMessage = () => {
        setFlashMessage( {'message':'', 'type':'info'} )
    };

    const getFlashMessage = () => {
        return flashMessage;
    }

    return {
        showFlashMessage,
        clearFlashMessage,
        getFlashMessage,
    }
}
