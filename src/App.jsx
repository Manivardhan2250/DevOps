import { useState } from "react";
import "./App.css";

import StudentList from "./components/StudentList";
import Student from "./components/Student";
import MarksForm from "./components/MarksForm";
import Result from "./components/Result";

function App() {
  // Subjects
  const subjects = [
    "Mathematics",
    "Java",
    "Database",
    "React",
    "DevOps",
  ];

  // Students with individual marks
  const [students, setStudents] = useState([
    {
      id: "S101",
      name: "Manivardhan",
      department: "Computer Science Engineering",
      marks: {
        Mathematics: 85,
        Java: 78,
        Database: 92,
        React: 88,
        DevOps: 90,
      },
    },

    {
      id: "S102",
      name: "Tejaswi",
      department: "Information Technology",
      marks: {
        Mathematics: 95,
        Java: 91,
        Database: 89,
        React: 94,
        DevOps: 96,
      },
    },

    {
      id: "S103",
      name: "Nandini",
      department: "Computer Science Engineering",
      marks: {
        Mathematics: 72,
        Java: 65,
        Database: 70,
        React: 68,
        DevOps: 75,
      },
    },

    {
      id: "S104",
      name: "Anjali",
      department: "Electronics Engineering",
      marks: {
        Mathematics: 55,
        Java: 62,
        Database: 48,
        React: 58,
        DevOps: 64,
      },
    },
  ]);

  // Selected student
  const [selectedStudentId, setSelectedStudentId] =
    useState("S101");

  // Search
  const [search, setSearch] = useState("");

  // Find selected student
  const selectedStudent = students.find(
    (student) => student.id === selectedStudentId
  );

  // Update marks of selected student
  const handleMarkChange = (subject, value) => {
    if (value === "") {
      updateStudentMark(subject, "");
      return;
    }

    const mark = Number(value);

    // Validation
    if (mark < 0 || mark > 100) {
      alert("Marks must be between 0 and 100.");
      return;
    }

    updateStudentMark(subject, mark);
  };

  // Function to update student's mark
  const updateStudentMark = (subject, value) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) => {
        if (student.id === selectedStudentId) {
          return {
            ...student,

            marks: {
              ...student.marks,
              [subject]: value,
            },
          };
        }

        return student;
      })
    );
  };

  // Search students
  const filteredStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Calculate class average
  const calculateStudentAverage = (student) => {
    const marks = subjects.map(
      (subject) => Number(student.marks[subject] || 0)
    );

    const total = marks.reduce(
      (sum, mark) => sum + mark,
      0
    );

    return total / subjects.length;
  };

  const classAverage =
    students.length > 0
      ? students.reduce(
          (sum, student) =>
            sum + calculateStudentAverage(student),
          0
        ) / students.length
      : 0;

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>Student Marks Management System</h1>
        <p>College Student Result Dashboard</p>
      </header>

      <main className="container">

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search student by name..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {/* Student List */}
        <StudentList
          students={filteredStudents}
          selectedStudentId={selectedStudentId}
          onSelectStudent={setSelectedStudentId}
        />

        {selectedStudent && (
          <>
            {/* Student Information */}
            <Student
              student={selectedStudent}
            />

            <div className="dashboard-grid">

              {/* Marks Form */}
              <MarksForm
                subjects={subjects}
                marks={selectedStudent.marks}
                onMarkChange={handleMarkChange}
              />

              {/* Result */}
              <Result
                subjects={subjects}
                marks={selectedStudent.marks}
              />

            </div>
          </>
        )}

        {/* Class Average */}
        <div className="class-average">

          <h2>Class Average</h2>

          <h3>
            {classAverage.toFixed(2)}%
          </h3>

          <p>
            Average calculated from all{" "}
            <strong>{students.length}</strong>{" "}
            students.
          </p>

        </div>

      </main>

      {/* Footer */}
      <footer>
        © 2026 College Student Management System
      </footer>

    </div>
  );
}

export default App;