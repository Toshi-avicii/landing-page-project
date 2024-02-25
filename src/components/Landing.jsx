import LandingImg from '../assets/hero-image-simple-homepage.png';
import DoneRingRound from '../assets/Done_ring_round_fill.svg';

function Landing() {
  return (
    <section className="w-full h-full flex flex-col xl:flex-row items-center justify-center mt-8">
        <div className="landing-text lg:min-h-[75vh] order-2 xl:order-1 mt-10 lg:mt-0">
            <p className="uppercase font-semibold">😎  Simple way to communicate</p>
            <h1 className="font-bold my-5 text-4xl lg:text-7xl">
                <span className="inline-block mb-3 lg:mb-5">Actions for</span> <br className='lg:hidden' />
                <span className="inline-block mb-3 lg:mb-5">Accessibility</span> <br />
                <span>in Design</span>
            </h1>
            <h2 className="text-sm lg:text-lg my-8 lg:my-0">The fastest way to build and deploy websites with resusable components.</h2>
            <div className="btns w-full flex space-x-4 my-5">
                <button className='bg-[#2A4DD0] text-sm lg:text-base text-white px-6 lg:px-10 font-semibold py-3 rounded-md uppercase'>Get Started</button>
                <button className='underline text-sm lg:text-base text-[#2A4DD0] font-semibold'>Get live demo</button>
            </div>
            <div className="benifits flex space-x-2 mt-6 mb-8 xl:mb-0">
                <div className="first flex justify-center items-center space-x-2">
                    <img src={DoneRingRound} alt="tick-mark" />
                    <p className='text-xs lg:text-base'>No credit card required</p>
                </div>

                <div className="first flex justify-center items-center space-x-2">
                    <img src={DoneRingRound} alt="tick-mark" />
                    <p className='text-xs lg:text-base'>No software to install</p>
                </div>
            </div>
        </div>
        <div className="landing-img-container flex justify-center order-1 lg:min-h-[70vh] xl:order-2">
            <img src={LandingImg} alt="landing-img" className='lg:max-w-[75%]' />
        </div>
    </section>
  )
}

export default Landing