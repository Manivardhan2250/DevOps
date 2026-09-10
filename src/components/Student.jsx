function Student({ student }) {
  return (
    <div className="student-info">

      <h2>Student Information</h2>

      <div className="student-details">

        <p>
          <strong>Student ID:</strong>{" "}
          {student.id}
        </p>

        <p>
          <strong>Name:</strong>{" "}
          {student.name}
        </p>

        <p>
          <strong>Department:</strong>{" "}
          {student.department}
        </p>

      </div>

    </div>
  );
}

export default Student;