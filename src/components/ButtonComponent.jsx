import './ButtonComponent.css';

export default function ButtonComponent({ text, onClick }) {
    return (
        <button className='botonesheader' onClick={onClick}>
            {text}
        </button>
    );
}

