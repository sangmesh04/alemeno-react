export default function CourseNav({ children }) {
  return (
    <nav className="py-4 px-6 text-sm font-medium">
      <ul className="flex space-x-3" style={{ justifyContent: "center" }}>
        {children}
      </ul>
    </nav>
  );
}
