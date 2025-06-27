
import { MdPeople, MdTrendingUp, MdStar, MdLocationOn } from "react-icons/md"

export default function AboutUs() {
  const stats = [
    { label: "Recipe Creators", value: "50K+", icon: <MdPeople className="w-6 h-6" /> },
    { label: "Years Cooking", value: "15+", icon: <MdTrendingUp className="w-6 h-6" /> },
    { label: "5-Star Recipes", value: "25K+", icon: <MdStar className="w-6 h-6" /> },
    { label: "Countries Served", value: "80+", icon: <MdLocationOn className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-orange-500">FlavorHub</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate community of chefs and food lovers sharing delicious recipes from around the world.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
              <div className="flex justify-center mb-3 text-orange-500">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            To make cooking accessible and enjoyable for everyone by providing high-quality recipes, expert tips, and a
            supportive community where food lovers can share their culinary adventures.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Cooking?</h2>
          <p className="text-gray-600">Join our community and discover thousands of delicious recipes.</p>
        </div>
      </div>
    </div>
  )
}
