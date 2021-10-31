import ExperienceItems from './ExperienceItems'
export default function Experience({
    updateExperienceField, 
    deleteExperience,
    addExperience,
    experience,
    id,
    DeleteBtn
}){
    const experienceFields = experience.map((exp,i) => (        
        < ExperienceItems
            updateExperienceField={updateExperienceField}
            deleteExperience={deleteExperience}
            addExperience={addExperience}
            id={exp.key}
            key={exp.key}
            deleteBtn={DeleteBtn}
        />
    ))
    return(
    <section id='experience' data-key={id}>
        <h2>Experience</h2>
        {experienceFields}
        <button type='button' className='Add btn' onClick={addExperience}>Add</button>
    </section>
    )
}