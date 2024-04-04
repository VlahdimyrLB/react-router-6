const Dashboard = ({ user }) => {
  return (
    <section className="section">
      {/* OPTIONAL CHAINING to ensure that theres a name if none it wont cause error */}
      <h4>Hello {user?.email}</h4>
    </section>
  );
};
export default Dashboard;
