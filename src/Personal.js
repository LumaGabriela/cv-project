
export default function Personal({updatePersonalField, updateProfileImg}){
    return(
        <section id='description'>
                <h2>Personal Information</h2>
                <label>
                    <input onChange={updatePersonalField} type='text' placeholder='First name' name='FirstName' className='input'></input>
                </label>
                <label>
                    <input onChange={updatePersonalField} type='text' placeholder='Last name' name='LastName' className='input'></input>
                </label>
                <label>
                    <input onChange={updatePersonalField} type='text' placeholder='Title' name='Title' className='input'></input>
                </label>
                <label className='label photo'>Profile Photo
                    <input type='file' placeholder='Photo' name='Photo' className='input photo' onChange={updateProfileImg}></input>
                </label>
                <label>
                    <input onChange={updatePersonalField} type='text' placeholder='Address' name='Address' className='input'></input>
                </label>
                <label>
                    <input onChange={updatePersonalField} type='text' placeholder='Phone number' name='PhoneNumber' className='input'></input>
                </label>
                <label>
                    <input onChange={updatePersonalField} type='text' placeholder='Email' name='Email' className='input'></input>
                </label>
                <label className='label description'>
                    <input onChange={updatePersonalField} type='text' placeholder='Description' name='Description' className='input description'></input>
                </label>
            </section>
    )
}