import { useFlashMessage } from './FlashMessageStore'



export default function useFlashMessage() {
    const {getMessage} = useFlashMessage;
    const message = getMessage();

    return(<>
    message.message && (
        <div className={`alert alert-${message.type}`}>
            {message.messsage}
        </div>
    )
    </>)
}