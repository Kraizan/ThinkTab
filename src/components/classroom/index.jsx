import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import classroomResources from '@/data/classroomResources'
import ResourceCard from '@/components/classroom/ResourceCard'

const ClassroomSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [subject, setSubject] = useState('')
  const [teacher, setTeacher] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [contentType, setContentType] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => setSearchTerm(e.target.value)
  const handleSubjectChange = (e) => setSubject(e.target.value)
  const handleTeacherChange = (e) => setTeacher(e.target.value)
  const handleStartDateChange = (e) => setStartDate(e.target.value)
  const handleEndDateChange = (e) => setEndDate(e.target.value)
  const handleContentTypeChange = (e) => setContentType(e.target.value)

  const filteredResources = classroomResources
    .filter(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (subject ? resource.subject === subject : true) &&
      (teacher ? resource.submittedBy.toLowerCase().includes(teacher.toLowerCase()) : true) &&
      (startDate ? new Date(resource.dateAdded) >= new Date(startDate) : true) &&
      (endDate ? new Date(resource.dateAdded) <= new Date(endDate) : true) &&
      (contentType ? resource.contentType === contentType : true)
    )

  const handleResourceClick = (resource) => {
    navigate(`/classroom/resource/${resource.id}`)
  }

  return (
    <Layout>
      <div className='w-1/4 p-4'>
        <h3 className="text-2xl font-bold text-text-dark mb-4">Filters</h3>
        <label className="block text-sm font-medium text-text-dark mb-1">Search for a resource</label>
        <input 
          type="text" 
          placeholder="Search for a resource" 
          value={searchTerm} 
          onChange={handleSearch} 
          className="w-full p-2 mb-4 border rounded focus:border-border-dark"
        />
        <label className="block text-sm font-medium text-text-dark mb-1">Subject</label>
        <select value={subject} onChange={handleSubjectChange} className="w-full p-2 mb-4 border rounded focus:border-border-dark">
          <option value="">All Subjects</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>
        <label className="block text-sm font-medium text-text-dark mb-1">Teacher</label>
        <input 
          type="text" 
          placeholder="Teacher" 
          value={teacher} 
          onChange={handleTeacherChange} 
          className="w-full p-2 mb-4 border rounded focus:border-border-dark"
        />
        <label className="block text-sm font-medium text-text-dark mb-1">Start Date</label>
        <input 
          type="date" 
          value={startDate} 
          onChange={handleStartDateChange} 
          className="w-full p-2 mb-4 border rounded focus:border-border-dark"
        />
        <label className="block text-sm font-medium text-text-dark mb-1">End Date</label>
        <input 
          type="date" 
          value={endDate} 
          onChange={handleEndDateChange} 
          className="w-full p-2 mb-4 border rounded focus:border-border-dark"
        />
        <label className="block text-sm font-medium text-text-dark mb-1">Content Type</label>
        <select value={contentType} onChange={handleContentTypeChange} className="w-full p-2 mb-4 border rounded focus:border-border-dark">
          <option value="">All Types</option>
          <option value="PDF">PDF</option>
          <option value="Video">Video</option>
          <option value="Document">Document</option>
        </select>
      </div>
      <div className='w-3/4 p-4 overflow-y-scroll pb-20'>
        <h2 className="text-4xl font-bold text-text-dark mb-4">Classroom Resources</h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-10">
          {filteredResources.map((resource, index) => (
            <ResourceCard 
              key={index} 
              resource={resource} 
              onClick={() => handleResourceClick(resource)} 
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ClassroomSection