import React from "react"
import defaultIcon from './profile.jpg'
import {IoPhonePortraitOutline, IoPerson, MdMessage} from 'react-icons/io'
// import {v4 as uuidv4} from 'uuid'
const CvToPrint = React.forwardRef(({personal, experience, education, img}, ref) => {    
    return(
        <section id='Cv-form' ref={ref}>
            <section className='Cv Personal'>
                <img className='ProfileImg' alt='profile-title' src={img?img:defaultIcon}></img>         
                <p>{personal[3].id}: {personal[3].value}</p>
                <p><IoPhonePortraitOutline/>{personal[4].id}: {personal[4].value}</p>
                <p><MdMessage />: {personal[5].value}</p>
                <p><IoPerson/> Description</p>
                <p>{personal[6].value}</p>
            </section> 

            <section className='Cv'>
                <section className='Cv Title'>
                    <h1>{personal[0].value} {personal[1].value}</h1>
                    <h3>{personal[2].value}</h3>
                </section>

                <section className='Experience'>
                <h3>Experience</h3>
                {experience.map((list) => (
                    <section className='CvExperienceGrid' key={list.key}>
                        <p className='duration'>{list.experienceList[3].value} - {list.experienceList[4].value}</p>
                        <p>{list.experienceList[0].value}</p>
                        <p>{list.experienceList[1].value}, {list.experienceList[2].value}</p>
                    </section>
                ))
                }
                </section>

                <section className='Education'>
                    <h3>Education</h3>
                    {education.map((list) => (
                        <section className='CvEducationGrid' key={list.key}>
                            < p className='duration'>{list.educationList[4].value} - {list.educationList[5].value}</p>
                            <p>{list.educationList[0].value}, {list.educationList[1].value}</p>
                            <p>{list.educationList[2].id}: {list.educationList[2].value}</p>
                            <p>{list.educationList[3].id}: {list.educationList[3].value}</p>

                        </section>    
                    ))
                    }
                </section>

            </section>
                     
        </section>
    )
  })
export default CvToPrint