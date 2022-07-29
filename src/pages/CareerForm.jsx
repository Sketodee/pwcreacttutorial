import React, {useState} from 'react'

const CareerForm = () => {
  const [inputs, setInputs] = useState({});
  const [displayData, setDisplayData] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setDisplayData(values => [...values, inputs]); 
  }
  const reverseDisplayData = displayData.reverse();
  return (
    <section className='container'>
    <form id = 'myForm' onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input className='btn' type="submit" />
    </form>
    {/* {displayData.map((item, index) => 
        <div key={index}> {item.username} {item.age} </div>)} */}
{reverseDisplayData.map((item, index) => 
        <div key={index}> {item.username} {item.age} </div>)}    
    
    </section>
  )
}
export default CareerForm







