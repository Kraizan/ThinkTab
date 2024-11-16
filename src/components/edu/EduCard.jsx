import React from "react";

const EduCard = (data) => {
  return (
    <div className="bg-card text-text-light rounded-lg p-5 flex flex-col gap-y-3 shadow-lg shadow-card-darker">
      <div className="rounded-md border-2 border-background-darker">
        <iframe
          src={data.videoUrl}
          title={data.title}
          className="w-full h-full rounded-md"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col gap-y-2 text-text-light">
        <div className="flex justify-between font-semibold">
          <p className="text-sm">{data.subject}</p>
          <p className="text-sm">Class: {data.grade}</p>
        </div>
        <h3 className="text-lg font-bold">{data.title}</h3>
        <p className="text-sm text-text-light-muted">{data.description}</p>
        <div className="flex justify-between font-semibold">
          <p className="text-sm">{data.submittedBy}</p>
          <p className="text-sm">{data.dateAdded}</p>
        </div>
      </div>
    </div>
  );
};

export default EduCard;
