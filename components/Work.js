import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import Image from "next/image"
export default function Work() {
    return (<> <div className="text-center text-8xl font-semibold relative">
    <span
      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text relative z-10"
      id="work"
    >
      Work
    </span>
    <style jsx>{`
      #work::after {
        content: 'Work'; 
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
  
  
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image
                  className='rounded-lg object-cover'
                  width={"100%"}
                  height={"100%"}
                  layout='responsive'
                  src={web1}
                />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  className='rounded-lg object-cover'
                  width={"100%"}
                  height={"100%"}
                  layout='responsive'
                  src={web2}
                />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  className='rounded-lg object-cover'
                  width={"100%"}
                  height={"100%"}
                  layout='responsive'
                  src={web3}
                />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  className='rounded-lg object-cover'
                  width={"100%"}
                  height={"100%"}
                  layout='responsive'
                  src={web4}
                />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  className='rounded-lg object-cover'
                  width={"100%"}
                  height={"100%"}
                  layout='responsive'
                  src={web5}
                />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  className='rounded-lg object-cover'
                  width={"100%"}
                  height={"100%"}
                  layout='responsive'
                  src={web6}
                />
              </div>
            </div></> );
}
