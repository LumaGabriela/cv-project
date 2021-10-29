import React from "react"
import defaultIcon from './profile.jpg'
import {v4 as uuidv4} from 'uuid'
const CvToPrint = React.forwardRef(({personal, experience, img}, ref) => {    
    return(
        <div id='Cv-form' ref={ref}>
            <section>
                <h2>Personal</h2>
                <div>{personal.map((item,i) => (
                    <p key={i}>{item.id}: {item.value}</p>
                ))}</div>
            </section>  
            <section>
            <h2>Experience</h2>
                <div>{experience.map((list) => (
                    list.experienceList.map((exp)=>(
                        <p key={uuidv4()}>{exp.id}: {exp.value}</p>
                    ))
                ))
                }</div>
            </section>
            <img className='ProfileImg' alt='profile-title' src={img?img:defaultIcon}></img>         
        </div>
    )
  })
export default CvToPrint