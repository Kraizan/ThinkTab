import React from 'react'
import avatar from '@/assets/avatar.png'

const StudentDetailsCard = ({ studentDetails }) => {
  return (
    <div className="w-full bg-card text-text-light p-5 rounded-lg shadow-lg mb-10">
      <h2 className="text-2xl font-bold mb-5">Student Details</h2>
      <div className="flex space-x-10 justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full" />
        </div>
        <div>
          <p className="text-lg"><strong>Name:</strong> {studentDetails.name}</p>
          <p className="text-lg"><strong>Roll No:</strong> {studentDetails.rollNo}</p>
          <p className="text-lg"><strong>Grade:</strong> {studentDetails.grade}</p>
          <p className="text-lg"><strong>Section:</strong> {studentDetails.section}</p>
        </div>
        <div>
          <p className="text-lg"><strong>Date of Birth:</strong> {studentDetails.dob}</p>
          <p className="text-lg"><strong>Address:</strong> {studentDetails.address}</p>
          <p className="text-lg"><strong>Contact:</strong> {studentDetails.contact}</p>
          <p className="text-lg"><strong>Email:</strong> {studentDetails.email}</p>
        </div>
        <div>
          <p className="text-lg"><strong>Guardian Name:</strong> {studentDetails.guardianName}</p>
          <p className="text-lg"><strong>Guardian Contact:</strong> {studentDetails.guardianContact}</p>
          <p className="text-lg"><strong>Enrollment Date:</strong> {studentDetails.enrollmentDate}</p>
          <p className="text-lg"><strong>House:</strong> {studentDetails.house}</p>
        </div>
      </div>
    </div>
  )
}

export default StudentDetailsCard