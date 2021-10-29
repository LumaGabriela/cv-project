export default function ExperienceItems({
    updateExperienceField, 
    deleteExperience,
    id
}){
    return(
    <section className='experience' data-key={id}>
        <label>
            <input type='text' className='input' onChange={updateExperienceField}
            name='Position' placeholder='Position'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateExperienceField}
            name='Company' placeholder='Company'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateExperienceField}
            name='City' placeholder='City'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateExperienceField}
            name='From' placeholder='From'></input>
        </label>
        <label>
            <input type='text' className='input' onChange={updateExperienceField}
            name='To' placeholder='To'></input>
        </label>
        <button type='button' className='btn' onClick={deleteExperience}>Delete</button>       
    </section>
    )
}