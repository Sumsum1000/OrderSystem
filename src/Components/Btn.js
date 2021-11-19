import './Btn.css';

export let Btn = ({submit, btnText}) => {
    return(
        <button className='input-text btn' onClick={submit}>{btnText}</button>
    )
}