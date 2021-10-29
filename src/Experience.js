import ExperienceItems from './ExperienceItems'
export default function Experience({
    updateExperienceField, 
    deleteExperience,
    addExperience,
    experience,
    id
}){
    const experienceFields = experience.map((exp,i) => (        
        < ExperienceItems
            updateExperienceField={updateExperienceField}
            deleteExperience={deleteExperience}
            addExperience={addExperience}
            id={exp.key}
            key={exp.key}
        />
    ))
    return(
    <section id='experience' data-key={id}>
        <h2>Experience</h2>
        {experienceFields}
        <button type='button' className='btn' onClick={addExperience}>Add</button>
    </section>
    )
}