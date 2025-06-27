import { useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { MdAdd, MdOutlineViewInAr } from "react-icons/md"
import { Link } from "react-router"


const Carossel = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  const carouselImages = [
    {
      src: "https://i.ibb.co/Lh56cLSz/pp3.jpg",
      title: "Share Your Favorite Recipes",
      caption: "Join thousands of home cooks sharing delicious recipes",
    },
    {
      src: "https://i.ibb.co/7tcb2Wj3/pp2.jpg",
      title: "Build Your Recipe Collection",
      caption: "Create, organize and share your culinary masterpieces",
    },
    {
      src: "https://i.ibb.co/svG6vQGt/pp1.jpg",
      title: "Connect with Food Lovers",
      caption: "Discover amazing recipes from our cooking community",
    },
  ]

    
    return (
        <div>
        <div className="w-full ">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          className="carousel-container"
        >
          {carouselImages.map((item, index) => (
            
            <div key={index} className="relative">
              <img src={item.src || "/placeholder.svg"} alt={item.title} className=" w-full h-64 md:h-96 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">{item.title}</h2>
                  <p className="text-sm md:text-lg mb-4">{item.caption}</p>
                <Link to='allrecipe'>
                
                <div className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2">
                    <MdOutlineViewInAr className="w-5 h-5"/>
                    View Recipe
                  </div>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
        </div>
    );
};

export default Carossel;