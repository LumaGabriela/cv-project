import React from "react"
import defaultIcon from './profile.jpg'
import { FaUser, FaMap, FaPhoneAlt, FaRegEnvelope, FaLaptopCode, FaGraduationCap } from "react-icons/fa"
// import {v4 as uuidv4} from 'uuid'
const CvToPrint = React.forwardRef(({personal, experience, education, img}, ref) => {    
    return(
        <section id='Cv-form' ref={ref}>
            <section className='Cv Personal'>
                <img className='ProfileImg' alt='profile-title' src={img?img:defaultIcon}></img>   
                <h3>CONTACT</h3>  
                <hr></hr>    
                <p><FaMap />  {personal[3].value}</p>
                <p><FaPhoneAlt />  {personal[4].value}</p>
                <p><FaRegEnvelope/> {personal[5].value}</p>
                <hr></hr>
                <h3><FaUser/> PROFILE</h3>
                <p>{personal[6].value}</p>
                
            </section> 
            
            <section className='Cv'>
                <section className='Cv Title'>
                    <h1>{personal[0].value} {personal[1].value}</h1>
                    <h3>{personal[2].value}</h3>
                </section>

                <section className='Experience'>
                <h2><FaLaptopCode />EXPERIENCE <hr></hr></h2>
                {experience.map((list) => (
                    <section className='CvExperience' key={list.key}>
                        <h3><span style={{fontSize: '2rem'}}>&#183;</span> {list.experienceList[0].value}</h3>
                        <p className='duration'>{list.experienceList[3].value} - {list.experienceList[4].value}</p>                        
                        <p>{list.experienceList[1].value}, {list.experienceList[2].value}</p>
                    </section>
                ))
                }
                </section>

                <section className='Education'>
                    <h2><FaGraduationCap />EDUCATION <hr></hr></h2>
                    {education.map((list) => (
                        <section className='CvEducation' key={list.key}>
                            <h3><span style={{fontSize: '2rem'}}>&#183;</span> {list.educationList[0].value}, {list.educationList[1].value}</h3>
                            < p className='duration'>{list.educationList[4].value} - {list.educationList[5].value}</p>                               
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