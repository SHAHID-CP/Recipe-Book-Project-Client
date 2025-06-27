import React from 'react';

const Cats = () => {
    return (
        <div>
            <div className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recipe Collection Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500 mb-1">2,847</div>
              <div className="text-sm text-gray-600">Total Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500 mb-1">4.8</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500 mb-1">156K</div>
              <div className="text-sm text-gray-600">Recipe Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500 mb-1">89K</div>
              <div className="text-sm text-gray-600">Recipe Saves</div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Cats;