import React, { useState } from 'react'
import eduVideos from '@/data/eduVideos'
import EduCard from '@/components/edu/EduCard'
import Layout from '@/components/layout/Layout'
import FilterSection from '@/components/edu/FilterSection'

const EduSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [subject, setSubject] = useState('')
  const [teacher, setTeacher] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [sortOrder, setSortOrder] = useState('')

  const handleSearch = (e) => setSearchTerm(e.target.value)
  const handleSubjectChange = (e) => setSubject(e.target.value)
  const handleTeacherChange = (e) => setTeacher(e.target.value)
  const handleStartDateChange = (e) => setStartDate(e.target.value)
  const handleEndDateChange = (e) => setEndDate(e.target.value)
  const handleSortOrderChange = (e) => setSortOrder(e.target.value)

  const filteredVideos = eduVideos
    .filter(video => 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (subject ? video.subject === subject : true) &&
      (teacher ? video.submittedBy.toLowerCase().includes(teacher.toLowerCase()) : true) &&
      (startDate ? new Date(video.dateAdded) >= new Date(startDate) : true) &&
      (endDate ? new Date(video.dateAdded) <= new Date(endDate) : true)
    )
    .sort((a, b) => {
      if (sortOrder === 'date-asc') return new Date(a.dateAdded) - new Date(b.dateAdded)
      if (sortOrder === 'date-desc') return new Date(b.dateAdded) - new Date(a.dateAdded)
      return 0
    })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Layout>
      <FilterSection
        searchTerm={searchTerm}
        subject={subject}
        teacher={teacher}
        startDate={startDate}
        endDate={endDate}
        sortOrder={sortOrder}
        handleSearch={handleSearch}
        handleSubjectChange={handleSubjectChange}
        handleTeacherChange={handleTeacherChange}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        handleSortOrderChange={handleSortOrderChange}
      />
      <div className="pb-20 px-10 w-3/4 h-full overflow-y-scroll">
        <h2 className="text-4xl font-bold text-text-dark mb-4">Lecture Hall</h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-10">
          {filteredVideos.map((video, index) => (
            <EduCard key={index} {...video} />
          ))}
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 left-10 bg-primary text-text-light p-2 rounded-full shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </Layout>
  )
}

export default EduSection