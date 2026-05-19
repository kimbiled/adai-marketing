import hero from '../../assets/desktop/Hero.svg';
import tick from '../../assets/icons/tick.svg';
import berg from '../../assets/desktop/berg.png';
import disney from '../../assets/desktop/disney.png';
import forbes from '../../assets/desktop/forbes.png';
import gorilla from '../../assets/desktop/gorilla.png';
import bigroup from '../../assets/desktop/bigroup.png';
import jusanbank from '../../assets/desktop/jusanbank.png';
import gold from '../../assets/desktop/gold.png';
import weproject from '../../assets/desktop/weproject.png';
import capital from '../../assets/desktop/capital.png';
import motiva from '../../assets/desktop/motiva.png';
import astanahub from '../../assets/desktop/astanahub.png';
import pocketbroker from '../../assets/desktop/pocketbroker.svg';

const logos = [
  { src: pocketbroker, alt: 'pocketbroker', height: 'h-16' },
  { src: berg, alt: 'berg', height: 'h-[47px]' },
  { src: disney, alt: 'disney', height: 'h-[38px]' },
  { src: forbes, alt: 'forbes', height: 'h-[25px]' },
  { src: gorilla, alt: 'gorilla', height: 'h-[63px]' },
  { src: bigroup, alt: 'bigroup', height: 'h-[40px]' },
  { src: jusanbank, alt: 'jusanbank', height: 'h-[38px]' },
  { src: gold, alt: 'gold', height: 'h-[56px]' },
  { src: weproject, alt: 'weproject', height: 'h-10' },
  { src: capital, alt: 'capital', height: 'h-[32px]' },
  { src: motiva, alt: 'motiva', height: 'h-10' },
  { src: astanahub, alt: 'astanahub', height: 'h-[42px]' },
];

const HeroDesktop = () => {
  return (
    <div className="font-ppneue flex flex-col w-[85%] items-center mt-[68px]">
      <div className="relative">
        <img src={hero} alt="hero" />
      </div>
      <div className="flex flex-row max-w-[1200px] w-full justify-between">
        <div className="flex flex-col gap-5 mt-9">
          <h1 className="font-medium text-[34px] leading-[37px]">
            A full-service marketing agency <br /> built for ambitious brands
          </h1>
          <p className="text-[#090C21] font-book text-lg">
            End-to-end creative and strategic marketing services
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-12 font-book">
          <div className="flex flex-row gap-3 rounded-2xl w-[183px] p-1 h-8 bg-[#F7F7F6] items-center">
            <img src={tick} alt="Icon" className="h-6 w-6" />
            <p>UX/UI & no-code</p>
          </div>
          <div className="flex flex-row gap-3 rounded-2xl w-[200px] p-1 h-8 bg-[#F7F7F6] items-center">
            <img src={tick} alt="Icon" className="h-6 w-6" />
            <p>Marketing campaigns</p>
          </div>
          <div className="flex flex-row gap-3 rounded-2xl w-[190px] p-1 h-8 bg-[#F7F7F6] items-center">
            <img src={tick} alt="Icon" className="h-6 w-6" />
            <p>Content production</p>
          </div>
        </div>
        <div>
          <div className="relative max-w-[445px] w-full overflow-hidden mt-10 flex flex-col gap-8">
            <div className="flex gap-2 flex-row font-medium">
              <button
                className="bg-[#FF9500] text-white rounded-lg w-44 h-12 transition-all duration-200 
                   hover:bg-[#E68600] active:bg-[#CC7700] focus:border focus:border-[#FFB84D]"
                onClick={() => {
                  const element = document.getElementById('recentProjects');
                  if (element) {
                    const offset = 100;
                    const elementPosition =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      offset;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                View Portfolio
              </button>
              <button
                className="bg-transparent border border-[#FF9500] text-[#FF9500] rounded-lg w-44 h-12 transition-all duration-200 
                   hover:bg-[#FFF3E0] active:bg-[#FFE0B2] active:border-[#CC7700] focus:border-[#FFB84D]"
                onClick={() => {
                  const element = document.getElementById('form-section');
                  if (element) {
                    const offset = 100;
                    const elementPosition =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      offset;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                Let's connect
              </button>
            </div>

            <div className=" relative flex flex-col">
              <div className="absolute bottom-0 left-0 h-16 w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
              <div className="absolute bottom-0 right-0 h-16 w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10"></div>

              <div className="flex items-center animate-scroll gap-6">
                {[...logos, ...logos].map(({ src, alt, height }, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={alt}
                    className={`w-auto ${height} ${alt === 'gorilla' ? 'mx-0' : 'mx-4'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesktop;
