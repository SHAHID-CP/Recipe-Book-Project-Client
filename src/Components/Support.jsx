
import {
  MdSearch,
  MdQuestionAnswer,
  MdBuild,
  MdSettings,
  MdExpandMore,
  MdExpandLess,
  MdChat,
  MdEmail,
  MdPhone,
} from "react-icons/md"
import { useState } from "react"

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const categories = [
    {
      icon: <MdQuestionAnswer className="w-6 h-6" />,
      title: "Getting Started",
      description: "Learn how to use FlavorHub",
      articles: 12,
    },
    {
      icon: <MdBuild className="w-6 h-6" />,
      title: "Recipe Help",
      description: "Cooking tips and troubleshooting",
      articles: 18,
    },
    {
      icon: <MdSettings className="w-6 h-6" />,
      title: "Account Settings",
      description: "Manage your profile",
      articles: 8,
    },
  ]

  const faqs = [
    {
      question: "How do I save recipes?",
      answer: "Click the heart icon on any recipe to save it to your personal cookbook.",
    },
    {
      question: "Can I modify recipes for dietary restrictions?",
      answer: "Yes! Many recipes include substitution suggestions for common dietary needs.",
    },
    {
      question: "How do I submit my own recipe?",
      answer: "Click 'Share Recipe' in your profile and fill out the recipe form.",
    },
  ]

  const supportOptions = [
    {
      icon: <MdChat className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help from our team",
    },
    {
      icon: <MdEmail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us your questions",
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call our support team",
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cooking <span className="text-orange-500">Support</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get help with recipes, cooking techniques, and FlavorHub features.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MdSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{category.articles} articles</span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <MdExpandLess className="w-5 h-5 text-gray-500" />
                  ) : (
                    <MdExpandMore className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
