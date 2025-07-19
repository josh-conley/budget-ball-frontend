import { useAuth } from '../contexts/AuthContext';

const LandingPage = () => {
  const { user } = useAuth();

  const mockLeagues = [
    { id: 1, name: 'Office Champions', members: 12, status: 'Active' },
    { id: 2, name: 'Family League', members: 8, status: 'Draft' },
    { id: 3, name: 'College Buddies', members: 10, status: 'Active' }
  ];

  const handleCreateLeague = () => {
    alert('Create League feature coming soon!');
  };

  const handleJoinLeague = () => {
    alert('Join League feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-green-600">Budget Ball</span>
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Hey {user?.username}! Ready to dominate your fantasy leagues?
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The smart way to manage your fantasy football leagues without breaking the bank.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={handleCreateLeague}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            🏆 Create New League
          </button>
          <button 
            onClick={handleJoinLeague}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            🤝 Join a League
          </button>
        </div>

        {/* My Leagues Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Leagues</h2>
          
          {mockLeagues.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockLeagues.map((league) => (
                <div key={league.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">{league.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      league.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {league.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    👥 {league.members} members
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200 font-medium">
                    View League
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 text-6xl mb-4">🏈</div>
              <p className="text-gray-500">You're not in any leagues yet.</p>
              <p className="text-gray-400 text-sm">Create or join a league to get started!</p>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-gray-600">Active Leagues</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">127</div>
            <div className="text-gray-600">Total Points</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2nd</div>
            <div className="text-gray-600">Best Ranking</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;