import './Modal.css'

let targetStatus = false;

const Modal = (props) => {

    return (
        <div className='backgroundModal' onClick={() => !targetStatus && props.modalOpenState(targetStatus)}>
            <div className='modal'
                onMouseEnter={() => targetStatus = true}
                onMouseLeave={() => targetStatus = false}>
                {props.modalContent}
            </div>
        </div>
    );
}

export default Modal;