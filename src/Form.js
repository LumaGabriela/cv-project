import Experience from "./Experience"
import Education from "./Education"
import Personal from "./Personal"
import React from "react"
export default function Form(
    {updatePersonalField, 
    updateProfileImg,    
    experience,
    updateExperienceField,
    deleteExperience,
    addExperience,
    education, 
    updateEducationField,
    addEducation,
    deleteEducation,
    handlePrint
    }){    
    return(
        <form id='form'>
            < Personal
            updateProfileImg={updateProfileImg}
            updatePersonalField={updatePersonalField}
            />
            <Experience 
            updateExperienceField={updateExperienceField}
            experience={experience}
            addExperience={addExperience}
            deleteExperience={deleteExperience}    
            />
            <Education 
            updateEducationField={updateEducationField}
            education={education}
            addEducation={addEducation}
            deleteEducation={deleteEducation}
            />  
            <button className='Print btn' type='button' onClick={handlePrint}>Print it</button>
              
        </form>
    )
}