import './Note.css';
import { Feild } from './Feild';
import { Btn } from './Btn';

const firstName  = 'שם פרטי';
const lastName = 'שם משפחה';
const date = 'תאריך';
const btnText = 'שלח';
const noteTitle = 'הזמנה חדשה';

export let Note = () => {

    return(
        <div className='note-container'>
            <h2>{noteTitle}</h2>
            <Feild headline={firstName}/>
            <Feild headline={lastName}/>
            <Feild headline={date}/>
            <Btn btnText={btnText}/>
        </div>
    )
}