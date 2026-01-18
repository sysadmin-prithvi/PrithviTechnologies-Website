export default function TableContainer({ children }) {
  return (
    <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}>
      {children}
    </div>
  );
}