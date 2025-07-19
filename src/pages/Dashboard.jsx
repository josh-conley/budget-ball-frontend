import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your Budget Ball dashboard, {user?.username}!</p>
    </div>
  );
};

export default Dashboard;