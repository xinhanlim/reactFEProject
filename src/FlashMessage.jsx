import { useFlashMessage } from './FlashMessageStore'



export default function FlashMessage() {
    const {getFlashMessage} = useFlashMessage();
    const message = getFlashMessage();

    return(<>
    {
    message.message && (
        <div className={`alert alert-${message.type}`}>
            {message.message}
        </div>
    )
}
    </>)
}