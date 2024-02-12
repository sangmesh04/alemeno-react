export default function CourseList({ children }) {
  return (
    <ul
      className="divide-y divide-slate-100"
      style={{ width: "68%", margin: "20px auto" }}
    >
      {children}
    </ul>
  );
}
