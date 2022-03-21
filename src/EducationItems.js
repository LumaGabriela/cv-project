import { FaBackspace } from 'react-icons/fa'
export default function EducationItems({
    updateEducationField, 
    deleteEducation,
    id
}){
    return(
    <section className='education' data-key={id}>
        <label>
            <input type='text' className='input' onChange={updateEducationField}
            name='University' placeholder='University name'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateEducationField}
            name='City' placeholder='City'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateEducationField}
            name='Degree' placeholder='Degree'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateEducationField}
            name='Subject' placeholder='Subject'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateEducationField}
            name='From' placeholder='From'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateEducationField}
            name='To' placeholder='To'></input>
        </label>
        <button type='button' className='Remove btn' onClick={deleteEducation}><FaBackspace /></button>
       
    </section>
    )
}