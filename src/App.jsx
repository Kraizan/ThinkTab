import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/components/dashboard";
import EduSection from "@/components/edu";
import Classroom from "@/components/classroom";
import ResourceViewer from "@/components/classroom/ResourceViewer";
import ChatSpace from "@/components/chatspace";

function App() {
  return (
    <div className="bg-background text-text tracking-wide">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edu" element={<EduSection />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/classroom/resource/:id" element={<ResourceViewer />} />
          <Route path="/chatspace" element={<ChatSpace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
