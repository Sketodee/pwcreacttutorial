import React from 'react'

const ApplicationhtmlForm = () => {
  return (
    <section className='container'>
        <form action="" id='myForm'>
        <label htmlFor="">First Name </label>
        <input type="text" id="firstName" /> <br /> 

        <label htmlFor="">Last Name </label>
        <input type="text" id="lastName" /> <br /> <br/>
        <label htmlFor=""> Age </label>
        <input type="number" id="age" /> <br /> < br/>

        <label htmlFor="gender">Gender: </label>
        <input type="radio" name="gender" value="male"/> <label> Male </label>
        <input type="radio" name="gender" value="female"/> <label> Female </label> <br /> <br/>

        <label htmlFor=""> State </label>
        <select name="state" id="state" >
            <option value=" Lagos" checked>Lagos</option>
          <option value="Ondo">Ondo</option>
          <option value="Oyo">Oyo</option>
          <option value="Ogun">Ogun</option>
          <option value="Kano">Kano</option>
          <option value="Niger"> Niger </option>
          <option value="Kaduna">Kaduna</option>
          <option value="Kwara">Kwara </option>
          <option value="Delta">Delta</option>
          <option value="Edo">Edo</option>
        </select> <br/><br/><br/>

        <label htmlFor="Courses">Selected Courses </label> 
        <input type="checkbox" name="track" value="Javascript"/> <label> Javascript </label><br/>
        <input type="checkbox" name="track" value="C#"/> <label>C# </label> <br/>
        <input type="checkbox" name="track" value="Agile"/> <label> Agile </label> <br/>
        <input type="checkbox" name="track" value="Data Science"/> <label> Data Science </label> <br/>
        <button className="btn" type="submit"> SUBMIT </button>
        </form>
    </section>
  )
}

export default ApplicationhtmlForm