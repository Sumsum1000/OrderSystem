import './Feild.css';

export let Feild = ({headline, value}) => {
    return (
        <div className='feild-container'>
            <span>{headline}</span>
            <input className='input-text' value={value} />
        </div>
    ) 
}