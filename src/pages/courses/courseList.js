export default function CourseList({ children }) {
  return (
    <ul
      className="divide-y divide-slate-100 courseList"
      style={{ width: "68%", margin: "20px auto" }}
    >
      {children}
    </ul>
  );
}
