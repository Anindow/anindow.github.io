import code from "../public/code.png"
import design from "../public/design.png"
import consulting from "../public/consulting.png"
import Image from "next/image"
const ServicesSection = () => {
  const cardClass =
    "text-center shadow-lg p-10 rounded-xl my-10  dark:bg-slate-800 flex-1 hover:shadow-xl hover:shadow-teal-600 dark:hover:shadow-teal-600 transform transition-transform duration-300 hover:scale-105 "
  const textColor = "text-gray-800 py-1 dark:text-gray-200"
  const textColorCardHeading =
    "text-gray-800 text-2xl font-medium py-6  dark:text-gray-200"
  const h4color = "py-4 text-teal-600 font-semibold dark:text-teal-400"
  const shineClass =
    "absolute top-0 -inset-full h-full w-1/2 z-5   block transform -skew-x-12 bg-gradient-to-r from-transparent to-white dark:to-slate-800  dark:opacity-20 hover:opacity-40 group-hover:animate-shine"
  return (
    <section className="-mt-96">
      <div className="">
        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I am a multifaceted
          <span className="text-teal-500 dark:text-teal-300">
            {" "}
            React developer{" "}
          </span>
          specializing in{" "}
          <span className="text-teal-500  dark:text-teal-300">creating </span>
          impactful digital experiences. With a proven track record of
          collaborating with talented individuals and delivering exceptional
          results, I offer a diverse range of services to meet your unique
          needs.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className={`${cardClass} group relative cursor-pointer`}>
          <Image src={design} width={100} height={100} />
          <h3 className={textColorCardHeading}>Beautiful Designs</h3>
          <p className={`${textColor} py-1`}>
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className={h4color}>Design Tools I Use</h4>
          <p className={textColor}>Photoshop</p>
          <p className={textColor}>Illustrator</p>
          <p className={textColor}>Figma</p>
          <p className={textColor}>Indesign</p>
          <div className={shineClass} />
        </div>
        <div className={`${cardClass} group relative cursor-pointer`}>
          <Image src={code} width={100} height={100} />
          <h3 className={textColorCardHeading}>Code your dream project</h3>
          <p className={`${textColor} py-1`}>
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className={h4color}>Dev Tools I Use</h4>
          <p className={textColor}>React</p>
          <p className={textColor}>Next</p>
          <p className={textColor}>Tailwind</p>
          <p className={textColor}>Firebase</p>
          {/* <div className={shineClass} /> */}
        </div>
        <div className={`${cardClass} group relative cursor-pointer`}>
          <Image src={consulting} width={100} height={100} />
          <h3 className={textColorCardHeading}>Consulting</h3>
          <p className={`${textColor} py-1`}>
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className={h4color}>Areas of Expertise</h4>
          <p className={textColor}>Design and Layout</p>
          <p className={textColor}>Content and Clarity</p>
          <p className={textColor}>Responsiveness and Compatibility</p>
          <p className={textColor}>User Experience Design</p>
          {/* <div className={shineClass} /> */}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
{
  /* <div className="group flex justify-center items-center relative  cursor-pointer ">
      <h2>Hover over me</h2>
      
      
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-slate-900 opacity-40 group-hover:animate-shine" />
    </div> */
}
