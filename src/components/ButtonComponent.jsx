import './ButtonComponent.css';

export default function ButtonComponent({ text, onClick }) {
    return (
        <button className='headerbutton' onClick={onClick}>
            {text}
        </button>
    );
}

