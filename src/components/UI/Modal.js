import classes from './modal.module.css'
import ReactDOM from "react-dom";
import Card from "./Card";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick   } />;
};
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const portalElement = document.getElementById('overlays')
const Modal = props => {
    return <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onCloseModal}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>,portalElement)}
    </>
}
export default  Modal
