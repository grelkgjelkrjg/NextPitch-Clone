import React, { useState } from 'react';

// Login Modal Component
export const LoginModal = ({ isOpen, onClose, onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-purple-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h2>
        
        <div className="text-center mb-6">
          <span className="text-gray-600">New to NextPitch? </span>
          <button 
            onClick={onSignup}
            className="text-purple-600 font-medium hover:text-purple-800"
          >
            Sign up
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div className="text-center">
            <button type="button" className="text-sm text-gray-600 hover:text-purple-600">
              <em>Forgotten password? Click here</em>
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 rounded-lg font-medium hover:bg-purple-800 transition-all duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

// Account Type Selection Modal
export const AccountTypeModal = ({ isOpen, onClose, onSelectType, onBackToLogin }) => {
  if (!isOpen) return null;

  const accountTypes = [
    { id: 'voter', name: 'Voter', icon: '✓' },
    { id: 'student', name: 'Student', icon: '🎓' },
    { id: 'educator', name: 'Educator', icon: '📋' },
    { id: 'judge', name: 'Judge', icon: '📄' },
    { id: 'comment', name: 'Comment', icon: '💬' }
  ];

  return (
    <div className="fixed inset-0 bg-purple-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-4xl w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-right mb-4">
          <span className="text-gray-600">Already have an account? </span>
          <button 
            onClick={onBackToLogin}
            className="text-purple-600 font-medium hover:text-purple-800"
          >
            Login
          </button>
        </div>
        
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Welcome to Next Pitch!</h2>
        <p className="text-gray-600 mb-8">What kind of account do you want to create?</p>
        
        <div className="grid grid-cols-5 gap-4 mb-8">
          {accountTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onSelectType(type.id)}
              className="bg-gray-100 hover:bg-purple-100 border-2 border-purple-600 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-2">{type.icon}</div>
              <div className="text-purple-900 font-medium">{type.name}</div>
            </button>
          ))}
        </div>

        <div className="text-center text-gray-500">
          group
        </div>
      </div>
    </div>
  );
};

// Educator Signup Modal
export const EducatorSignupModal = ({ isOpen, onClose, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    educatorId: 'ti-fe33',
    schoolId: '',
    schoolDistrict: '',
    email: '',
    password: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-purple-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <div className="flex items-center mb-6">
          <button 
            onClick={onBack}
            className="mr-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-bold text-purple-600">Educator Access</h2>
          <button 
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-center text-gray-600 mb-6">Sign up as an Educator so your students can submit the next pitch.</p>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="text-orange-600">Educator ID Referral - If you do not have one, use ti-fe33 *</span>
            </label>
            <input
              type="text"
              value={formData.educatorId}
              onChange={(e) => setFormData({...formData, educatorId: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              School ID (You can always add this later)
            </label>
            <input
              type="text"
              value={formData.schoolId}
              onChange={(e) => setFormData({...formData, schoolId: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="text-orange-600">School District ID (You can always add this later)</span>
            </label>
            <input
              type="text"
              value={formData.schoolDistrict}
              onChange={(e) => setFormData({...formData, schoolDistrict: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 rounded-lg font-medium hover:bg-purple-800 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// Student Signup Modal
export const StudentSignupModal = ({ isOpen, onClose, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    educatorId: '',
    grade: '',
    email: '',
    password: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-purple-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <div className="flex items-center mb-6">
          <button 
            onClick={onBack}
            className="mr-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-bold text-purple-600">Student Access</h2>
          <button 
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-center text-gray-600 mb-6">Sign up to submit your pitch.</p>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Educator ID *
              </label>
              <input
                type="text"
                value={formData.educatorId}
                onChange={(e) => setFormData({...formData, educatorId: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Grade *
              </label>
              <input
                type="text"
                value={formData.grade}
                onChange={(e) => setFormData({...formData, grade: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 rounded-lg font-medium hover:bg-purple-800 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// Header Component
export const Header = ({ currentPage, setCurrentPage }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAccountTypeModal, setShowAccountTypeModal] = useState(false);
  const [showEducatorSignup, setShowEducatorSignup] = useState(false);
  const [showStudentSignup, setShowStudentSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSignupClick = () => {
    setShowLoginModal(false);
    setShowAccountTypeModal(true);
  };

  const handleAccountTypeSelect = (type) => {
    setShowAccountTypeModal(false);
    if (type === 'educator') {
      setShowEducatorSignup(true);
    } else if (type === 'student') {
      setShowStudentSignup(true);
    }
    // Add other account types as needed
  };

  const closeAllModals = () => {
    setShowLoginModal(false);
    setShowAccountTypeModal(false);
    setShowEducatorSignup(false);
    setShowStudentSignup(false);
  };

  const goBackToAccountType = () => {
    setShowEducatorSignup(false);
    setShowStudentSignup(false);
    setShowAccountTypeModal(true);
  };

  const goBackToLogin = () => {
    setShowAccountTypeModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 
                className="text-2xl font-bold text-purple-900 cursor-pointer"
                onClick={() => setCurrentPage('home')}
              >
                NEXTPITCH
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button
                className={`text-gray-700 hover:text-purple-900 font-medium ${currentPage === 'howitworks' ? 'text-purple-900' : ''}`}
                onClick={() => setCurrentPage('howitworks')}
              >
                How it works
              </button>
              <button
                className={`text-gray-700 hover:text-purple-900 font-medium ${currentPage === 'competitions' ? 'text-purple-900' : ''}`}
                onClick={() => setCurrentPage('competitions')}
              >
                Competitions
              </button>
              <button
                className={`text-gray-700 hover:text-purple-900 font-medium ${currentPage === 'pricing' ? 'text-purple-900' : ''}`}
                onClick={() => setCurrentPage('pricing')}
              >
                Pricing
              </button>
            </nav>

            <div className="flex items-center">
              <button 
                onClick={handleLoginClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={closeAllModals}
        onSignup={handleSignupClick}
      />

      <AccountTypeModal 
        isOpen={showAccountTypeModal}
        onClose={closeAllModals}
        onSelectType={handleAccountTypeSelect}
        onBackToLogin={goBackToLogin}
      />

      <EducatorSignupModal 
        isOpen={showEducatorSignup}
        onClose={closeAllModals}
        onBack={goBackToAccountType}
      />

      <StudentSignupModal 
        isOpen={showStudentSignup}
        onClose={closeAllModals}
        onBack={goBackToAccountType}
      />
    </>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <p className="text-sm font-medium text-purple-200 mb-4 tracking-wider uppercase">
            COMPETITION MANAGEMENT SOFTWARE
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Plan engaging learning activities with ease and flexibility for everyone
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
            NextPitch is the easy and low-cost way to share and support student ideas - no tech experience required!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Learn More
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
};

// Competition Platform Section
export const CompetitionPlatformSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [competitionId, setCompetitionId] = useState('');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
              Meet Your New Competition Platform
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Host your own competitions at any level - from preK to college. 
              Easily increase engagement by using web based submission, 
              voting, community comments, crowdfunding, and rubric based judging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-900 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-800 transition-all duration-300">
                Learn More
              </button>
              <button className="border border-purple-900 text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-all duration-300">
                Start Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Find A Competition</h3>
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Search by topic, teacher, school, district"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="near"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button className="bg-purple-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-all duration-300">
                  Search
                </button>
              </div>

              <div className="text-center text-gray-500 py-2">or</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Educator/Competition ID
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="12-000281"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={competitionId}
                    onChange={(e) => setCompetitionId(e.target.value)}
                  />
                  <button className="bg-purple-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-all duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Planning Guides Section
export const PlanningGuidesSection = () => {
  const guides = [
    {
      id: 1,
      title: "COMMUNITY PROGRAMS",
      subtitle: "Witnessing Change Through Community-Based Civic Competitions",
      image: "https://images.unsplash.com/photo-1574130303188-31a915382726",
      category: "Community"
    },
    {
      id: 2,
      title: "ELEMENTARY", 
      subtitle: "First Perfect Beginnings: Introducing Young Learners to Entrepreneurship",
      image: "https://images.pexels.com/photos/5781281/pexels-photo-5781281.jpeg",
      category: "Elementary"
    },
    {
      id: 3,
      title: "MIDDLE SCHOOL",
      subtitle: "Goal Setting and Reflection: Moving Students Set Goals, Mental Progress, and Reflect on Learning Through Entrepreneurial Activities",
      image: "https://images.pexels.com/photos/7561837/pexels-photo-7561837.jpeg",
      category: "Middle School"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
          Explore Planning Guides by Level
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div key={guide.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-purple-600 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    {guide.category.toUpperCase()}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{guide.title}</h3>
                  <p className="text-sm text-gray-200">{guide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Innovation Center Section
export const InnovationCenterSection = () => {
  const articles = [
    {
      id: 1,
      title: "Fostering a Culture of Innovation: Building a Department-Wide Culture that Values Creativity and Risk-Taking",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      category: "Innovation"
    },
    {
      id: 2,
      title: "Measuring Impact and Outcomes: Metrics for Assessing the Success of Entrepreneurial Initiatives in the Classroom",
      image: "https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg",
      category: "Assessment"
    },
    {
      id: 3,
      title: "Curriculum Alignment: How Entrepreneurial Projects Can Align with Existing Curriculum Goals and Standards",
      image: "https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg",
      category: "Curriculum"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
          Latest from the Innovation Center
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-purple-900 text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NextPitch Assistant Section
export const NextPitchAssistantSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2422556/pexels-photo-2422556.jpeg"
              alt="NextPitch Assistant"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  NP
                </div>
                <span className="text-gray-800 font-medium text-sm">NextPitch Assistant</span>
              </div>
              <p className="text-gray-600 text-xs">
                Hi. You are exploring a beta version of NextPitch. She is best viewed on a desktop. Your questions and feedback will shape our final updates. How can we help?
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Meet The NextPitch Assistant
            </h2>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed">
              A new AI-powered content generator, designed to support educators and partners by creating draft lesson plans, insightful comments, and more — helping you save time and enhance engagement in every competition.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg text-lg">
              Try It Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const footerSections = {
    legal: [
      'Terms of Service',
      'Privacy Policy', 
      'Student Data Policy',
      'Terms',
      'Copyright Notice',
      'Accessibility',
      'Sustainability',
      'California',
      'New York'
    ],
    learn: [
      'Support',
      'Professional Development',
      'Case Studies',
      'Blog'
    ],
    engage: [
      'Educators',
      'Groups',
      'Judge',
      'Comment',
      'Corporate',
      'Staff Login'
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">NEXTPITCH</h3>
            <p className="text-purple-200 mb-4 leading-relaxed">
              NextPitch is a platform that allows educators to host web-based competitions that cultivate entrepreneurial thinking, creativity and problem solving abilities among students.
            </p>
            <p className="text-purple-200 mb-6">
              The online contests encourage engagement at family, community, and international levels.
            </p>
            <p className="text-purple-200">Connect@MyNextPitch.com</p>
            <p className="text-sm text-purple-300 mt-6">© 2025 by NextPitch Educational Services, LLC</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-200">LEGAL</h4>
            <ul className="space-y-3">
              {footerSections.legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-200">LEARN</h4>
            <ul className="space-y-3">
              {footerSections.learn.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-200">ENGAGE</h4>
            <ul className="space-y-3">
              {footerSections.engage.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <select className="bg-purple-800 border border-purple-600 text-white px-4 py-2 rounded-lg">
                <option>EN</option>
                <option>ES</option>
                <option>FR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// How It Works Page Component
export const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Make any class more engaging with a competition.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">
                Your All-In-One Tool for Hosting Web-Based Competitions
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Showcase student ideas and receive meaningful feedback from industry professionals and community members by hosting your own web-based competitions.
                </p>
                <p>
                  Engage easily with web-enabled entry submission, voting, community commenting, crowdfunding, and rubric-based judging.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1709377303352-7c845ac999ac"
                alt="Competition Platform Demo"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Setup</h3>
              <p className="text-gray-600">Create competitions in minutes with our intuitive interface.</p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Engagement</h3>
              <p className="text-gray-600">Connect students with real-world feedback and support.</p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
              <p className="text-gray-600">Track engagement and measure learning outcomes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Competitions Search Page Component
export const CompetitionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('competitions');

  const mockCompetitions = [
    {
      id: 1,
      title: "Human Rights Watch",
      school: "Carson Junior High",
      date: "5/1/26, 2:00 AM",
      description: "Create a project that raises awareness about human rights. Speak up for fairness, safety, and justice for everyone!",
      pitches: 0,
      comments: 0,
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
    }
  ];

  const tabs = [
    { id: 'competitions', name: 'Competitions' },
    { id: 'pitches', name: 'Pitches' },
    { id: 'schools', name: 'Schools' },
    { id: 'districts', name: 'Districts' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Home button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-purple-900 hover:text-purple-700 mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </button>

        <h1 className="text-3xl font-bold text-purple-900 mb-2">Search</h1>
        <div className="flex items-center text-gray-500 mb-8">
          <span>Showing Results for:</span>
          <span className="ml-4 text-gray-400">Competition ID / Topic / City / State / Industry</span>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-900 shadow-sm'
                  : 'text-gray-600 hover:text-purple-900'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Competition Results */}
        <div className="space-y-6">
          {mockCompetitions.map((competition) => (
            <div key={competition.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-purple-900 mb-1">
                        {competition.title}
                      </h3>
                      <p className="text-gray-600 mb-1">{competition.school}</p>
                      <p className="text-gray-500 text-sm">{competition.date}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex space-x-8">
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Pitches</div>
                          <div className="text-2xl font-bold text-purple-900">{competition.pitches}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Comments</div>
                          <div className="text-2xl font-bold text-purple-900">{competition.comments}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {competition.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No more results message */}
        <div className="text-center py-12">
          <p className="text-gray-500">No more competitions found matching your search criteria.</p>
        </div>
      </div>
    </div>
  );
};

// Pricing Page Component  
export const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for individual educators getting started",
      features: [
        "Up to 3 competitions per year",
        "Basic rubric templates",
        "Email support",
        "Student submissions up to 25",
        "Basic analytics"
      ],
      buttonText: "Get Started",
      buttonClass: "border border-purple-600 text-purple-600 hover:bg-purple-50"
    },
    {
      name: "Professional", 
      price: "$49",
      period: "per month",
      description: "For schools and districts running multiple competitions",
      features: [
        "Unlimited competitions",
        "Advanced rubric builder", 
        "Priority support",
        "Unlimited submissions",
        "Advanced analytics & reporting",
        "Custom branding",
        "Integration support"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "Training & onboarding",
        "SLA guarantee",
        "White-label options"
      ],
      buttonText: "Contact Sales",
      buttonClass: "border border-purple-600 text-purple-600 hover:bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Choose the plan that fits your educational needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-900">{plan.price}</span>
                    {plan.period !== "Forever" && plan.period !== "Contact us" && (
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    )}
                    {plan.period === "Forever" && (
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What kind of support do you provide?
              </h3>
              <p className="text-gray-600">
                We provide email support for all plans, priority support for Professional plans, and dedicated account management for Enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};