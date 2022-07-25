import React from 'react'
import Card from '../components/Card'

const StudentsData = ({studentsDataDetails}) => {
  return (
    <div>
        {studentsDataDetails.map((student) => {
       return(
        <Card key={student.id} name={student.name} state={student.state} stack={student.stack} 
        desc= {student.desc} jobTitle = {student.jobTitle}
        />
       )
      })}
    </div>
  )
}

export default StudentsData