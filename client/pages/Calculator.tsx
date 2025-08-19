import { Link } from 'react-router-dom';

export default function Calculator() {
  return (
    <div className="min-h-screen bg-crypto-bg text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="glass-card p-8 rounded-2xl">
          <h1 className="text-3xl font-bold gradient-text mb-4">Calculator Page</h1>
          <p className="text-gray-300 mb-6">
            This page is a placeholder. The main crypto calculator is integrated 
            into the homepage experience.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-crypto-green to-crypto-blue text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
