import { color } from "chart.js/helpers";

export const studentDetails = {
  name: "John Doe",
  rollNo: "12345",
  grade: "8",
  section: "A",
  dob: "2008-05-15",
  address: "123 Main St, Springfield",
  contact: "123-456-7890",
  email: "john.doe@example.com",
  guardianName: "Jane Doe",
  guardianContact: "123-456-7891",
  enrollmentDate: "2015-09-01",
  house: "Blue",
};

export const attendanceData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Attendance",
      data: [95, 90, 85, 80, 75, 70],
      backgroundColor: "rgba(30, 120, 255, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

export const scoresData = {
  labels: ["Math", "Science", "History", "English", "PE", "Art"],
  datasets: [
    {
      label: "Scores",
      data: [85, 90, 78, 88, 92, 80],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

export const performanceData = {
  labels: ["Assignments", "Quizzes", "Exams", "Projects"],
  datasets: [
    {
      label: "Performance",
      data: [80, 85, 90, 75],
      backgroundColor: "rgba(153, 102, 255, 0.6)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

export const submissionsData = {
  labels: ["On Time", "Late", "Due"],
  datasets: [
    {
      label: "Submissions",
      data: [20, 5, 3],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 99, 132, 0.6)", 
        "rgba(255, 206, 86, 0.6)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)", 
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const subjectPerformanceData = {
  labels: ["Math", "Science", "History", "English", "PE", "Art"],
  datasets: [
    {
      label: "Subject Performance",
      data: [85, 88, 80, 90, 92, 78],
      backgroundColor: "rgba(255, 159, 64, 0.6)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
    },
  ],
};

export const weeklyProgressData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Weekly Progress",
      data: [75, 80, 85, 90],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};
