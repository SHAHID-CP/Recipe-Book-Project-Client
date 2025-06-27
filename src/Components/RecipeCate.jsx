
import { useEffect, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {
  MdStar,
  MdAdd,
  MdGroup,
  MdTrendingUp,
  MdRestaurant,
  MdFavorite,
  MdVisibility,
  MdAccessTime,
} from "react-icons/md"

const RecipeCate = () => {
    const [currentRecipe, setCurrentRecipe] = useState(0)
    const [currentCategory, setCurrentCategory] = useState(0)

    useEffect(() => {
    const recipeInterval = setInterval(() => {
      setCurrentRecipe((prev) => (prev + 1) % featuredRecipes.length)
    }, 3000)

    const categoryInterval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % recipeCategories.length)
    }, 4000)

    return () => {
      clearInterval(recipeInterval)
      clearInterval(categoryInterval)
    }
  }, [])


    const featuredRecipes = [
    {
      title: "Spicy Chicken Curry",
      author: "Chef Maria",
      rating: 4.8,
      views: "2.3K",
      time: "45 min",
      likes: 156,
      description:
        "A rich and flavorful curry with tender chicken pieces in aromatic spices. Perfect for dinner with family and friends.",
    },
    {
      title: "Chocolate Cake",
      author: "Baker John",
      rating: 4.9,
      views: "3.1K",
      time: "60 min",
      likes: 234,
      description: "Moist and decadent chocolate cake perfect for any celebration. Made with premium cocoa and love.",
    },
    {
      title: "Fresh Garden Salad",
      author: "Chef Sarah",
      rating: 4.7,
      views: "1.8K",
      time: "15 min",
      likes: 89,
      description: "Crisp vegetables with homemade dressing for a healthy meal. Fresh ingredients from the garden.",
    },
    {
      title: "Beef Stir Fry",
      author: "Cook Mike",
      rating: 4.6,
      views: "2.7K",
      time: "30 min",
      likes: 178,
      description: "Quick and delicious stir fry with tender beef and fresh vegetables. Perfect for busy weeknights.",
    },
  ]

  const recipeCategories = [
    {
      name: "Breakfast Recipes",
      count: "1,245",
      description:
        "Start your day with delicious morning recipes including pancakes, eggs, smoothies, and healthy breakfast bowls that will energize your morning.",
    },
    {
      name: "Lunch Specialties",
      count: "2,156",
      description:
        "Perfect midday meals for every taste including fresh salads, hearty sandwiches, soups, and light meals that satisfy without being too heavy.",
    },
    {
      name: "Dinner Delights",
      count: "3,234",
      description:
        "Hearty evening meals for the whole family featuring pasta dishes, grilled meats, casseroles, and international cuisines from around the world.",
    },
    {
      name: "Sweet Desserts",
      count: "1,567",
      description:
        "Sweet treats to end your meal perfectly including cakes, cookies, ice cream, and decadent desserts that will satisfy your sweet tooth.",
    },
    {
      name: "Quick Snacks",
      count: "987",
      description:
        "Quick bites for any time of day including healthy snacks, party appetizers, and easy-to-make treats for when hunger strikes.",
    },
    {
      name: "Refreshing Beverages",
      count: "654",
      description:
        "Refreshing drinks and smoothies including fresh juices, cocktails, coffee drinks, and healthy smoothies to quench your thirst.",
    },
  ]

    return (
        <div>
            {/* Featured Recipe Text Section */}
      <div className="bg-gray-100 py-16" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Recipe</h2>
            <p className="text-gray-600 text-lg">Discover amazing recipes from our community</p>
          </div>

          <div className="text-center" data-aos="slide-up">
            <div key={currentRecipe} className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" data-aos="fade-in">
                {featuredRecipes[currentRecipe].title}
              </h3>

              <div
                className="flex items-center justify-center gap-6 mb-4 text-gray-600"
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-1">
                  <MdStar className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium">{featuredRecipes[currentRecipe].rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdAccessTime className="w-5 h-5 text-orange-500" />
                  <span>{featuredRecipes[currentRecipe].time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdVisibility className="w-5 h-5 text-blue-500" />
                  <span>{featuredRecipes[currentRecipe].views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdFavorite className="w-5 h-5 text-red-500" />
                  <span>{featuredRecipes[currentRecipe].likes}</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4" data-aos="fade-in" data-aos-delay="400">
                {featuredRecipes[currentRecipe].description}
              </p>

              <p className="text-orange-600 font-medium" data-aos="fade-in" data-aos-delay="600">
                Created by {featuredRecipes[currentRecipe].author}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Category Text Section */}
      <div className="bg-white py-16" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recipe Categories</h2>
            <p className="text-gray-600 text-lg">Explore recipes for every meal and occasion</p>
          </div>

          <div className="text-center" data-aos="slide-up">
            <div key={currentCategory} className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" data-aos="fade-in">
                {recipeCategories[currentCategory].name}
              </h3>

              <div className="mb-6" data-aos="fade-in" data-aos-delay="200">
                <span className="bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-lg font-semibold">
                  {recipeCategories[currentCategory].count} recipes available
                </span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-in" data-aos-delay="400">
                {recipeCategories[currentCategory].description}
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default RecipeCate;