import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EduSection from '@/components/edu'
import Classroom from '@/components/classroom'
import ResourceViewer from '@/components/classroom/ResourceViewer'

function App() {

  return (
    <div className='bg-background text-text tracking-wide'>
      <BrowserRouter>
        <Routes>
          <Route path="/edu" element={<EduSection />} />
          <Route path='/classroom' element={<Classroom />} />
          <Route path='/classroom/resource/:id' element={<ResourceViewer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
