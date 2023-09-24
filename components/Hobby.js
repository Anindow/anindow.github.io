import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const hobbiesData = [
  {
    title: "PC building",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152828922430509187/image.png",
  },
  {
    title: "Sports",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152823421160394783/image.png",
  },
  {
    title: "Biking",
    image:
      "https://media.discordapp.net/attachments/1152481548973658132/1152830018070773870/image.png",
  },
  {
    title: "Esports",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152483326653890571/image.png",
  },
  {
    title: "Tech news",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152826487548936274/image.png",
  },
  {
    title: "Coding",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152485767990485002/3d-minimal-coding-icon-coding-screen-web-development-concept-browser-with-a-programming-source-code-and-magnifying-glass-3d-illustration-png.png",
  },
  {
    title: "Drawing",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152485927566979092/3199899.png",
  },
  {
    title: "Cycaling",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152486044252516372/5778454.png",
  },
  {
    title: "Music",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152486235462451220/2402463.png",
  },
  {
    title: "Movies",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152486219998044221/3658959.png",
  },
  {
    title: "Audio-books",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152486672584425523/3339079.png",
  },
  {
    title: "Reading",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152486495349907547/read-13.png",
  },
  {
    title: "Traking",
    image:
      "https://cdn.discordapp.com/attachments/1152481548973658132/1152486361555804200/1974052.png",
  },
]
const HobbiesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 items by default
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Adjust autoplay speed (milliseconds)
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2, // Show 4 items at xl
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3, // Show 4 items at lg
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3, // Show 3 items at md
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2, // Show 2 items at sm
        },
      },
      {
        breakpoint: 480, // xs
        settings: {
          slidesToShow: 1, // Show 1 item at xs
        },
      },
    ],
  }

  return (
    <div className='text-center xl:mt-20 lg:mt-0 sm:mt-0 xs:mt-0 md:mt-0 dark:text-white'>
      <div className='relative flex justify-center'>
        <div className='xl:absolute -top-28 left-0 right-96  xl:text-8xl lg:text-4xl lg:m-12 mb-4 text-slate-800 font-semibold dark:text-teal-400 dark:bg-gray-800 xl:bg-red-300 dark:border-teal-700 max-w-md  p-6 border border-cyan-200 rounded-lg shadow-md z-10 backdrop-blur-lg '>
          Hobbies
        </div>
      </div>
      <div className='relative z-0'>
        <Slider {...settings}>
          {hobbiesData.map((hobby, index) => (
            <div key={index} className='relative'>
              <div className='max-w-sm rounded-xl overflow-hidden shadow-lg mx-auto border-teal-800 hover:border-r-2 hover:border-t-2 hover:shadow-inner bg-teal-400 hover:bg-teal-200 dark:bg-teal-800 px-6'>
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className='w-full pt-4'
                />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{hobby.title}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HobbiesCarousel
