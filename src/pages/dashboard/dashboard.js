const Dashboard = () => {
  return (
    <>
      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            Student dashboard
          </h1>
        </div>
      </header> */}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <h1
            className="text-3xl font-bold text-gray-700"
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              lineHeight: 1.25,
              fontSize: "2.4rem",
              letterSpacing: "-.016rem",
            }}
          >
            Let's start learning, Deepak!
          </h1>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
