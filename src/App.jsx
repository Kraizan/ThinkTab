import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EduSection from '@/components/edu'

function App() {

  return (
    <div className='bg-background text-text tracking-wide'>
      <BrowserRouter>
        <Routes>
          <Route path="/edu" element={<EduSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
