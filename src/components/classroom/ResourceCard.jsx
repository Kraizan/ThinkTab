import React from "react";
import pdfLogo from "@/assets/pdf-logo.png";

const ResourceCard = ({ resource, onClick }) => {
  return (
    <div
      className="bg-card text-text-light rounded-lg p-5 flex justify-between items-center shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full flex flex-col gap-y-3">
        <div className="w-full flex justify-between">
          <div>
            <h3 className="text-lg font-bold">{resource.title}</h3>
            <p className="text-sm text-text-light-muted">
              {resource.description}
            </p>
          </div>
          <div>
            <img src={pdfLogo} alt="PDF Logo" className="w-12 h-12" />
          </div>
        </div>
        <div className="flex justify-between font-semibold">
          <p className="text-sm">Subject: {resource.subject}</p>
          <p className="text-sm">Class: {resource.gradeLevel}</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p className="text-sm">Submitted by: {resource.submittedBy}</p>
          <p className="text-sm">{resource.dateAdded}</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
