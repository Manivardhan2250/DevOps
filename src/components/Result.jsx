import Grade from "./Grade";

function Result({ marks, subjects }) {

  // Convert marks into numbers
  const markValues = subjects.map(
    (subject) =>
      Number(marks[subject] || 0)
  );

  // Calculate total
  const total = markValues.reduce(
    (sum, mark) => sum + mark,
    0
  );

  // Calculate average
  const average =
    total / subjects.length;

  // Student passes only if every subject >= 40
  const isPass = markValues.every(
    (mark) => mark >= 40
  );

  return (
    <div className="card result">

      <h2>Result</h2>

      <div className="result-item">
        <span>Total Marks</span>
        <strong>
          {total} / {subjects.length * 100}
        </strong>
      </div>

      <div className="result-item">
        <span>Average</span>
        <strong>
          {average.toFixed(2)}%
        </strong>
      </div>

      <div className="result-item">
        <span>Status</span>

        <strong
          className={
            isPass ? "pass" : "fail"
          }
        >
          {isPass ? "PASS" : "FAIL"}
        </strong>
      </div>

      <Grade average={average} />

    </div>
  );
}

export default Result;