import { useContext, useState, useEffect } from 'react';
import AuthContext from '../Provider/AuthContext';
import { updateProfile } from 'firebase/auth';
import { FaUser, FaEnvelope, FaCamera, FaHistory, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    displayName: '',
    photoURL: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || '',
        photoURL: user.photoURL || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL
      });

      setMessage({ 
        type: 'success', 
        text: 'Profile updated successfully!' 
      });
      setIsEditing(false);
      
      // Reload the page to reflect changes in navbar
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Failed to update profile. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      displayName: user.displayName || '',
      photoURL: user.photoURL || ''
    });
    setIsEditing(false);
    setMessage({ type: '', text: '' });
  };

  // Mock donation history - in real app this would come from a database
  const donationHistory = [
    {
      id: 1,
      campaign: "Warm Blankets for Sylhet Villages",
      itemType: "Blankets",
      quantity: 5,
      date: "2025-01-15",
      status: "Delivered"
    },
    {
      id: 2,
      campaign: "Winter Clothes Drive - Chittagong",
      itemType: "Winter Clothes",
      quantity: 10,
      date: "2025-02-20",
      status: "In Transit"
    },
    {
      id: 3,
      campaign: "Food Support for Rajshahi Families",
      itemType: "Food Items",
      quantity: 3,
      date: "2025-03-05",
      status: "Pending Pickup"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f4f8ff] section-padding">
      <div className="app-container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Manage your profile and view your donation history</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={user?.photoURL || 'https://via.placeholder.com/150?text=User'}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#9DC7FF] mb-4"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150?text=User';
                    }}
                  />
                  <div className="absolute bottom-4 right-0 bg-[#9DC7FF] rounded-full p-2">
                    <FaCamera className="text-white text-xl" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{user?.displayName || 'User'}</h2>
                <p className="text-gray-600 flex items-center justify-center gap-2 mt-2">
                  <FaEnvelope /> {user?.email}
                </p>
              </div>

              <div className="border-t pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Member Since</span>
                    <span className="font-semibold text-gray-800">
                      {user?.metadata?.creationTime 
                        ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                        : 'Recently'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Donations</span>
                    <span className="font-semibold text-[#1e3a8a]">{donationHistory.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Items Donated</span>
                    <span className="font-semibold text-[#1e3a8a]">
                      {donationHistory.reduce((sum, d) => sum + d.quantity, 0)}
                    </span>
                  </div>
                </div>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full mt-6 bg-[#9DC7FF] hover:bg-[#7EB5FF] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <FaEdit /> Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Edit Profile Form */}
            {isEditing && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaEdit className="text-[#9DC7FF]" /> Edit Profile
                </h2>

                {message.text && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    message.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <FaUser /> Display Name
                    </label>
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9DC7FF]"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <FaCamera /> Photo URL
                    </label>
                    <input
                      type="url"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9DC7FF]"
                      placeholder="https://example.com/photo.jpg"
                    />
                    <p className="text-sm text-gray-500 mt-2">Enter a valid image URL for your profile picture</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <FaEnvelope /> Email Address
                    </label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                      disabled
                    />
                    <p className="text-sm text-gray-500 mt-2">Email cannot be changed</p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-[#9DC7FF] hover:bg-[#7EB5FF] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <FaSave /> {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      disabled={loading}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <FaTimes /> Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Donation History */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaHistory className="text-[#9DC7FF]" /> Donation History
              </h2>

              {donationHistory.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">No donations yet</p>
                  <a
                    href="/donation"
                    className="inline-block bg-[#9DC7FF] hover:bg-[#7EB5FF] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Browse Campaigns
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {donationHistory.map((donation) => (
                    <div
                      key={donation.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-lg text-gray-800">{donation.campaign}</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {donation.itemType} • Quantity: {donation.quantity}
                          </p>
                        </div>
                        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                          donation.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : donation.status === 'In Transit'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {donation.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Date: {new Date(donation.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Account Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-3xl font-bold mb-2">{donationHistory.length}</div>
                <div className="text-blue-100">Total Campaigns</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-3xl font-bold mb-2">
                  {donationHistory.reduce((sum, d) => sum + d.quantity, 0)}
                </div>
                <div className="text-indigo-100">Items Donated</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-3xl font-bold mb-2">
                  {donationHistory.filter(d => d.status === 'Delivered').length}
                </div>
                <div className="text-cyan-100">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
