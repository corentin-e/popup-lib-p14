import './popup.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            {props.children}
            <button className='popup-button' type="button" onClick={() => props.setTrigger(false)}>Close</button>
        </div>
    ) : "";
}
export default Popup;
