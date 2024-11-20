const chatGroups = [
    {
      id: 1,
      name: "School Group",
      type: "school",
      messages: [
        {
          id: 1,
          sender: "Principal",
          role: "teacher",
          content: "Welcome back to school! Let's have a great year ahead.",
          timestamp: "2023-10-01T08:00:00Z",
        },
        {
          id: 2,
          sender: "John Doe",
          role: "student",
          content: "Looking forward to the new semester!",
          timestamp: "2023-10-01T08:05:00Z",
        },
        // Add more messages as needed
      ],
    },
    {
      id: 2,
      name: "Class 8A Group",
      type: "class",
      messages: [
        {
          id: 1,
          sender: "Ms. Smith",
          role: "teacher",
          content: "Don't forget to submit your assignments by Friday.",
          timestamp: "2023-10-02T09:00:00Z",
        },
        {
          id: 2,
          sender: "Jane Doe",
          role: "student",
          content: "Can we get an extension on the assignment?",
          timestamp: "2023-10-02T09:15:00Z",
        },
        // Add more messages as needed
      ],
    },
    {
      id: 3,
      name: "Math Group",
      type: "subject",
      messages: [
        {
          id: 1,
          sender: "Mr. Johnson",
          role: "teacher",
          content: "Please review the algebra problems before the next class.",
          timestamp: "2023-10-03T10:00:00Z",
        },
        {
          id: 2,
          sender: "Alice Johnson",
          role: "student",
          content: "Can someone help me with question 5?",
          timestamp: "2023-10-03T10:10:00Z",
        },
        // Add more messages as needed
      ],
    },
    {
      id: 4,
      name: "Science Group",
      type: "subject",
      messages: [
        {
          id: 1,
          sender: "Dr. Brown",
          role: "teacher",
          content: "Don't forget to bring your lab coats tomorrow.",
          timestamp: "2023-10-04T11:00:00Z",
        },
        {
          id: 2,
          sender: "Bob Smith",
          role: "student",
          content: "What experiment are we doing tomorrow?",
          timestamp: "2023-10-04T11:05:00Z",
        },
        // Add more messages as needed
      ],
    },
    {
      id: 5,
      name: "History Group",
      type: "subject",
      messages: [
        {
          id: 1,
          sender: "Ms. Davis",
          role: "teacher",
          content: "Please read chapter 4 before the next class.",
          timestamp: "2023-10-05T12:00:00Z",
        },
        {
          id: 2,
          sender: "Charlie Brown",
          role: "student",
          content: "Can we discuss the main events of chapter 4?",
          timestamp: "2023-10-05T12:10:00Z",
        },
        // Add more messages as needed
      ],
    },
    {
      id: 6,
      name: "English Group",
      type: "subject",
      messages: [
        {
          id: 1,
          sender: "Mrs. Wilson",
          role: "teacher",
          content: "Please submit your essays by the end of the week.",
          timestamp: "2023-10-06T13:00:00Z",
        },
        {
          id: 2,
          sender: "David Lee",
          role: "student",
          content: "Can I get feedback on my draft?",
          timestamp: "2023-10-06T13:15:00Z",
        },
        // Add more messages as needed
      ],
    },
  ]
  
  export default chatGroups