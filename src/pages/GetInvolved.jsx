import { Link } from 'react-router-dom';
import { FaHandsHelping, FaBoxOpen, FaBullhorn, FaUsers, FaHeart, FaCalendarAlt } from 'react-icons/fa';

const GetInvolved = () => {
  const volunteerOpportunities = [
    {
      id: 1,
      icon: <FaHandsHelping className="text-5xl text-[#9DC7FF]" />,
      title: "Become a Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact in your community. Help with collection drives, distribution events, and community outreach.",
      cta: "Join Now",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      id: 2,
      icon: <FaBoxOpen className="text-5xl text-[#9DC7FF]" />,
      title: "Donate Items",
      description: "Contribute warm clothes, blankets, food items, or other essentials. Every donation helps someone in need stay warm and healthy during winter.",
      cta: "View Campaigns",
      link: "/donation",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    {
      id: 3,
      icon: <FaBullhorn className="text-5xl text-[#9DC7FF]" />,
      title: "Spread Awareness",
      description: "Help us reach more people by sharing our campaigns on social media, organizing awareness events, or becoming a community ambassador.",
      cta: "Learn More",
      bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100"
    },
    {
      id: 4,
      icon: <FaUsers className="text-5xl text-[#9DC7FF]" />,
      title: "Organize a Drive",
      description: "Start your own collection drive in your school, office, or neighborhood. We'll provide guidance and support throughout the process.",
      cta: "Get Started",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100"
    },
    {
      id: 5,
      icon: <FaHeart className="text-5xl text-[#9DC7FF]" />,
      title: "Corporate Partnership",
      description: "Partner with us for corporate social responsibility initiatives. Engage your team in meaningful giving and community building activities.",
      cta: "Contact Us",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-100"
    },
    {
      id: 6,
      icon: <FaCalendarAlt className="text-5xl text-[#9DC7FF]" />,
      title: "Event Participation",
      description: "Join our seasonal events, distribution programs, and community gatherings. Be part of the warmth we spread across Bangladesh.",
      cta: "View Events",
      bgColor: "bg-gradient-to-br from-violet-50 to-violet-100"
    }
  ];

  const impactStats = [
    { number: "50,000+", label: "People Helped" },
    { number: "500+", label: "Active Volunteers" },
    { number: "8", label: "Divisions Covered" },
    { number: "100+", label: "Partner Organizations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#9DC7FF] to-[#7EB5FF] text-white py-20">
  <div className="app-container">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Join us in our mission to spread warmth and hope across Bangladesh. 
              There are many ways you can make a difference in the lives of those who need it most.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
  <div className="app-container -mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#1e3a8a] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunities Section */}
  <div className="app-container py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ways to Get Involved</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose how you'd like to contribute and become part of our growing community of changemakers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerOpportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className={`${opportunity.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col`}
            >
              <div className="mb-6">{opportunity.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{opportunity.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{opportunity.description}</p>
              {opportunity.link ? (
                <Link
                  to={opportunity.link}
                  className="bg-[#9DC7FF] hover:bg-[#7EB5FF] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  {opportunity.cta}
                </Link>
              ) : (
                <button className="bg-[#9DC7FF] hover:bg-[#7EB5FF] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  {opportunity.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 py-16">
  <div className="app-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Join Warm Hearts BD?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#9DC7FF] text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Make Real Impact</h3>
                    <p className="text-gray-700">See the direct results of your contributions in communities across Bangladesh.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9DC7FF] text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Join a Community</h3>
                    <p className="text-gray-700">Connect with like-minded individuals passionate about social change.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9DC7FF] text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Flexible Commitment</h3>
                    <p className="text-gray-700">Choose how and when you want to contribute based on your availability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9DC7FF] text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Personal Growth</h3>
                    <p className="text-gray-700">Develop leadership, teamwork, and organizational skills while helping others.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ready to Start?</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9DC7FF]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9DC7FF]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">I'm interested in</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9DC7FF]">
                    <option>Volunteering</option>
                    <option>Donating Items</option>
                    <option>Organizing a Drive</option>
                    <option>Corporate Partnership</option>
                    <option>Event Participation</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#9DC7FF] hover:bg-[#7EB5FF] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Submit Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
  <div className="app-container py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Every Action Counts</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Whether you volunteer for an hour or donate a single blanket, your contribution helps us spread warmth and hope. Join us today!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/donation"
            className="bg-[#9DC7FF] hover:bg-[#7EB5FF] text-white font-bold py-4 px-8 rounded-lg transition-colors inline-block"
          >
            View Campaigns
          </Link>
          <Link
            to="/auth/login"
            className="bg-white hover:bg-gray-50 text-[#1e3a8a] font-bold py-4 px-8 rounded-lg border-2 border-[#9DC7FF] transition-colors inline-block"
          >
            Sign Up to Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
