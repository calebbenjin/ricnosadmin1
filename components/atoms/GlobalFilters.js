

export default function GlobalFilters({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows && preGlobalFilteredRows.length;

  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`${count} records...`}
        style={{
          border: "0"
        }}
      />
    </span>
  );
}
