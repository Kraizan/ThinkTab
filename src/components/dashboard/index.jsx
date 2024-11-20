import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import Layout from "@/components/layout/Layout";
import {
  studentDetails,
  attendanceData,
  scoresData,
  performanceData,
  submissionsData,
  subjectPerformanceData,
  weeklyProgressData,
} from "@/data/dashboardData";
import StudentDetailsCard from "@/components/dashboard/StudentDetailsCard";

const Dashboard = () => {
  return (
    <Layout>
      <div className="w-full px-14 overflow-y-scroll pb-20">
        <h1 className="text-4xl font-bold mb-10">
          Student Performance Dashboard
        </h1>
        <StudentDetailsCard studentDetails={studentDetails} />
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-background-lighter p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Attendance</h2>
            <Bar data={attendanceData} />
          </div>
          <div className="bg-background-lighter p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Scores</h2>
            <Bar data={scoresData} />
          </div>
          <div className="bg-background-lighter p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Performance</h2>
            <Line data={performanceData} />
          </div>
          <div className="bg-background-lighter p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Submissions</h2>
            <Pie
              data={submissionsData}
              style={{ width: 250, height: 250, margin: "auto" }}
            />
          </div>
          <div className="bg-background-lighter p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Subject Performance</h2>
            <Bar data={subjectPerformanceData} />
          </div>
          <div className="bg-background-lighter p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Weekly Progress</h2>
            <Line data={weeklyProgressData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
