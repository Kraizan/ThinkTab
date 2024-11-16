import React from 'react'

const FilterSection = ({
  searchTerm,
  subject,
  teacher,
  startDate,
  endDate,
  sortOrder,
  handleSearch,
  handleSubjectChange,
  handleTeacherChange,
  handleStartDateChange,
  handleEndDateChange,
  handleSortOrderChange,
}) => {
  return (
    <div className="w-1/4 ml-10">
      <h3 className="text-2xl font-bold text-text-dark mb-4">Filters</h3>
      
      <label className="block text-sm font-medium text-text-dark mb-1">Search for a video</label>
      <input
        type="text"
        placeholder="Search for a video"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border-2 rounded-md focus:border-border outline-none"
      />
      
      <label className="block text-sm font-medium text-text-dark mb-1">Subject</label>
      <select
        value={subject}
        onChange={handleSubjectChange}
        className="w-full p-2 mb-4 border-2 rounded-md focus:border-border outline-none "
      >
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
        className="w-full p-2 mb-4 border-2 rounded-md focus:border-border outline-none "
      />
      
      <label className="block text-sm font-medium text-text-dark mb-1">Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="w-full p-2 mb-4 border-2 rounded-md focus:border-border outline-none"
      />
      
      <label className="block text-sm font-medium text-text-dark mb-1">End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        className="w-full p-2 mb-4 border-2 rounded-md focus:border-border outline-none "
      />
      
      <label className="block text-sm font-medium text-text-dark mb-1">Sort By</label>
      <select
        value={sortOrder}
        onChange={handleSortOrderChange}
        className="w-full p-2 mb-4 border-2 rounded-md focus:border-border outline-none "
      >
        <option value="">Sort By</option>
        <option value="date-asc">Date (Ascending)</option>
        <option value="date-desc">Date (Descending)</option>
      </select>
    </div>
  )
}

export default FilterSection