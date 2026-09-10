function MarksForm({
  subjects,
  marks,
  onMarkChange,
}) {
  return (
    <div className="card">

      <h2>Enter / Update Marks</h2>

      {subjects.map((subject) => (
        <div
          className="mark-input"
          key={subject}
        >

          <label>{subject}</label>

          <input
            type="number"
            min="0"
            max="100"
            value={marks[subject] ?? ""}
            onChange={(e) =>
              onMarkChange(
                subject,
                e.target.value
              )
            }
          />

        </div>
      ))}

    </div>
  );
}

export default MarksForm;