function Grade({ average }) {
  let grade;

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  return (
    <div className="grade-box">

      <h2>Grade</h2>

      <h1>{grade}</h1>

    </div>
  );
}

export default Grade;