import { TypeAnimation } from "react-type-animation";
import Hobby from "./Hobby"
import AboutCards from "./AboutCards";
const About = () => {
  return (
    <>
      <div className="text-7xl font-semibold relative">
        <span
          className="text-start bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text relative z-10"
          id="about"
        >
          Hey there...
        </span>
        <span
          className="bg-gradient-to-r lg:text-xl text-xs from-cyan-500 py-4 pt-6  to-teal-500 text-transparent bg-clip-text relative z-10"
          id="more-about"
        >
          <br />
          <TypeAnimation
            sequence={[
              "Looks like you're Interested in Me!",
              1000,
              "Looks like you're Interested in Me!!",
              400,
              "Looks like you're Interested in Me!!!",
              1000,
              "Looks like you're Interested in Me ♥",
              900,
              "Looks like you're Interested in Me ♥♥",
              400,
              "Looks like you're Interested in Me ♥♥♥",
              800,
              "Thanks for being curious!",
              400,
              "Thanks for being curious!!",
              400,
              "It's nice to share interests.",
              800,
              "Thanks for being interested!",
              800,
              "I'm glad you're curious!",
              800,
              "Your curiosity is refreshing!",
              10000,
              "Here's a little more about me:",
              1000,
              "I love exploring new places.",
              800,
              "I'm passionate about technology.",
              800,
              "I enjoy reading science fiction.",
              800,
              "I'm always up for a good cup of coffee.",
              800,
              "Feel free to ask me anything!",
              1000,
              "I'm a software developer by profession.",
              800,
              "I love street dogs.",
              800,
              "I'm a fan of outdoor activities like hiking and camping.",
              800,
              "I'm a foodie and love trying new cuisines.",
              800,
              "I believe in lifelong learning.",
              10000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </span>
        <style jsx>{`
          #about::after {
            content: "Hey there...";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            text-shadow: 4px 10px 5px rgba(0, 0, 0, 0.5);
            color: transparent;
            z-index: -1;
          }
        `}</style>
      </div>
    <br /><br /><br />
      <AboutCards />
      <br /><br /><br />
      <div className=" "> <Hobby /></div>
    </>
  );
};

export default About;
