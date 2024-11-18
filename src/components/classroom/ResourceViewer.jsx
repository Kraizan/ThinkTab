import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import classroomResources from "@/data/classroomResources";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Layout from "@/components/layout/Layout";

const ResourceViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const resource = classroomResources.find((res) => res.id === parseInt(id));

  if (!resource) {
    return <div>Resource not found</div>;
  }

  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center h-screen px-10 py-5">
        <div className="w-full flex justify-between mb-5 items-center">
          <button
            className="w-24 bg-primary text-text-light p-2 rounded-full shadow-lg flex items-center transform transition-transform hover:scale-105 active:scale-95"
            onClick={() => navigate("/classroom")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <h3 className="text-2xl font-bold">{resource.title}</h3>
          <div className="w-24"></div>
        </div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={`https://cors-anywhere.herokuapp.com/https://home.iitk.ac.in/~peeyush/102A/Lecture-notes.pdf`}
          />
        </Worker>
      </div>
    </Layout>
  );
};

export default ResourceViewer;
