import EducationItems from './EducationItems'
export default function Education({
    updateEducationField, 
    deleteEducation,
    addEducation,
    education
}){
    const EducationFields = education.map((exp) => (        
        < EducationItems
            updateEducationField={updateEducationField}
            deleteEducation={deleteEducation}
            addEducation={addEducation}
            id={exp.key}
            key={exp.key}
        />
    ))
    return(
    <section id='education' >
        <h2>Education</h2>
        {EducationFields}
        <button type='button' className='Add btn' onClick={addEducation}>Add</button>
    </section>
    )
}