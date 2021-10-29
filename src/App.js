// eslint-disable-next-line
import React, {useRef, useState} from 'react'
import {useReactToPrint} from 'react-to-print'
import Form from './Form'
import CvToPrint from './CV'
import Header from './Header'
import './App.css'
import {v4 as uuidv4} from 'uuid'


function App() {
  // React To Print
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  // State variables
  const [img, setImg] = useState()
  const [personal, setPersonal] = useState([
    {id: 'FirstName', value: 'Pato'},
    {id: 'LastName', value: 'Pato'},
    {id: 'Title', value: 'Pato'},
    {id: 'Address', value: 'Pato'},
    {id: 'PhoneNumber', value: 'Pato'},
    {id: 'Email', value: 'Pato'},
    {id: 'Description', value: 'Pato'},
  ])
  const [experience, setExperience] = useState([
    {key: uuidv4(), experienceList:[
      {id: 'Position', value: 'Pato'},
      {id: 'Company', value: 'Pato'},
      {id: 'City', value: 'Pato'},
      {id: 'From', value: 'Pato'},
      {id: 'To', value: 'Pato'}
    ]}
  ])
  const [education, setEducation] = useState([
    {key: uuidv4(), educationList:[
      {id: 'University', value: 'Pato'},
      {id: 'City', value: 'Pato'},
      {id: 'Degree', value: 'Pato'},
      {id: 'Subject', value: 'Pato'},
      {id: 'From', value: 'Pato'},
      {id: 'To', value: 'Pato'}
    ]}
  ])
  const updateProfileImg = (e) => {
      if(e.target.files[0]){
      const profile = URL.createObjectURL(e.target.files[0])
      setImg(profile)
      }
  }
// Personal field
  const updatePersonalField = (e) => {
      let oldPersonal = personal      
      const index = oldPersonal.findIndex((item) => item.id === e.target.name)
      oldPersonal.splice(index, 1, {id: e.target.name, value: e.target.value})
      setPersonal([...oldPersonal])     
  }
  // Experience field
  const updateExperienceField = (e) => {
    let expList = experience      
    const index = expList.findIndex((item) => item.key === e.target.parentElement.parentElement.dataset.key)
    const oldExperience = expList[index].experienceList
    const i = oldExperience.findIndex((item) => item.id === e.target.name)
    oldExperience.splice(i, 1, {id:e.target.name, value: e.target.value})
    expList[index].experienceList = oldExperience
    setExperience([...expList]) 
    
  }
  const deleteExperience = (e) => {
    const key = e.target.parentElement.dataset.key
    const index= experience.findIndex((item)=> item.key === key)
    let oldExperience = experience
    oldExperience.splice(index, 1)
    setExperience([...oldExperience])
    console.log(oldExperience)
  }
  const addExperience = (e) => {
    const oldExperience = experience
    oldExperience.push({key: uuidv4(), experienceList:[
      {id: 'Position', value: 'Pato'},
      {id: 'Company', value: 'Pato'},
      {id: 'City', value: 'Pato'},
      {id: 'From', value: 'Pato'},
      {id: 'To', value: 'Pato'}
    ]})
    setExperience([...oldExperience])    
  }
  // Education fields
  const updateEducationField = (e) => {
    let edList = education      
    const index = edList.findIndex((item) => item.key === e.target.parentElement.parentElement.dataset.key)
    const oldEducation = edList[index].educationList
    const i = oldEducation.findIndex((item) => item.id === e.target.name)
    oldEducation.splice(i, 1, {id:e.target.name, value: e.target.value})
    edList[index].educationList = oldEducation
    setEducation([...edList]) 
    console.log(education)
  }
  const deleteEducation = (e) => {
    const key = e.target.parentElement.dataset.key
    const index= education.findIndex((item)=> item.key === key)
    let oldEducation = education
    oldEducation.splice(index, 1)
    setEducation([...oldEducation])
    console.log(oldEducation)
  }
  const addEducation = (e) => {
    const oldEducation = education
    oldEducation.push({key: uuidv4(), educationList:[
      {id: 'University', value: 'Pato'},
      {id: 'City', value: 'Pato'},
      {id: 'Degree', value: 'Pato'},
      {id: 'Subject', value: 'Pato'},
      {id: 'From', value: 'Pato'},
      {id: 'To', value: 'Pato'}
    ]})
    setEducation([...oldEducation])    
  }  
  return (
    <div className="App">
      < Header />
      <Form 
      updateProfileImg={updateProfileImg}
      updatePersonalField={updatePersonalField}  
      experience={experience} 
      updateExperienceField={updateExperienceField}
      deleteExperience={deleteExperience}   
      addExperience={addExperience}
      education={education}
      updateEducationField={updateEducationField}
      deleteEducation={deleteEducation}
      addEducation={addEducation}
      />
      <button className='btn' onClick={handlePrint}>Print it</button>
      < CvToPrint 
      personal={personal}
      experience={experience}
      education={education}
      img={img}
      ref={componentRef}
       />
    </div>
  );
}

export default App;
