function StudentList({
  students,
  selectedStudentId,
  onSelectStudent,
}) {
  return (
    <div className="card">

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="student-list">

          {students.map((student) => (
            <button
              key={student.id}
              className={
                selectedStudentId === student.id
                  ? "student-button active"
                  : "student-button"
              }
              onClick={() =>
                onSelectStudent(student.id)
              }
            >
              {student.name}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}

export default StudentList;