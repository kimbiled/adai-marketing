import hero from '../../assets/desktop/Hero.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FooterDesktop = () => {
  const location = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const links = [
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms and Conditions', url: '/terms-and-conditions' },
    { label: 'Cookie Policy', url: '/cookie-policy' },
  ];

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const handleNavigation = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    } else {
      sessionStorage.setItem('scrollTo', id);
      window.location.href = '/';
    }
  };

  const getFooterLinkClass = (hoveredItem, currentItem) =>
    `text-[18px] leading-[24px] font-book cursor-pointer transition-colors duration-300 ease-in-out ${
      hoveredItem && hoveredItem !== currentItem
        ? 'text-[#8B8E98]'
        : 'text-[#090C21]'
    }`;

  return (
    <footer className="font-ppneue mt-[70px] flex w-full justify-center bg-white py-[80px]">
      <div className="flex w-[85%] max-w-[1200px] justify-between">
        <div className="flex flex-col">
          <img src={hero} alt="adai marketing" className="w-[265px]" />

          <p className="mt-4 text-[14px] font-book leading-[20px] text-[#9CA3AF]">
            © Adai Marketing 2026
          </p>

          <div className="mt-7 flex flex-col gap-4">
            {links.map((link, index) => (
              <p
                key={index}
                onClick={() => handleRedirect(link.url)}
                className="cursor-pointer text-[14px] font-book leading-[18px] text-[#9CA3AF] transition duration-300 hover:text-[#090C21]"
              >
                {link.label}
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-[120px] pr-[140px]">
          <div className="flex flex-col gap-6">
            <p className="text-[18px] font-book leading-[24px] text-[#9CA3AF]">
              Menu
            </p>
            <button
              onClick={() => handleNavigation('services')}
              onMouseEnter={() => setHoveredMenu('services')}
              onMouseLeave={() => setHoveredMenu(null)}
              className={`${getFooterLinkClass(
                hoveredMenu,
                'services',
              )} bg-transparent border-none text-left`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('recentProjects')}
              onMouseEnter={() => setHoveredMenu('works')}
              onMouseLeave={() => setHoveredMenu(null)}
              className={`${getFooterLinkClass(
                hoveredMenu,
                'works',
              )} bg-transparent border-none text-left`}
            >
              Works
            </button>
            <button
              onClick={() => handleNavigation('about')}
              onMouseEnter={() => setHoveredMenu('about')}
              onMouseLeave={() => setHoveredMenu(null)}
              className={`${getFooterLinkClass(
                hoveredMenu,
                'about',
              )} bg-transparent border-none text-left`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('blog')}
              onMouseEnter={() => setHoveredMenu('blog')}
              onMouseLeave={() => setHoveredMenu(null)}
              className={`${getFooterLinkClass(
                hoveredMenu,
                'blog',
              )} bg-transparent border-none text-left`}
            >
              Blog
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[18px] font-book leading-[24px] text-[#9CA3AF]">
              Social
            </p>
            <a
              href="https://www.instagram.com/ronin.dsgn/"
              onMouseEnter={() => setHoveredSocial('instagram')}
              onMouseLeave={() => setHoveredSocial(null)}
              className={getFooterLinkClass(hoveredSocial, 'instagram')}
            >
              Instagram
            </a>
            <a
              href="https://t.me/jedikuna"
              onMouseEnter={() => setHoveredSocial('telegram')}
              onMouseLeave={() => setHoveredSocial(null)}
              className={getFooterLinkClass(hoveredSocial, 'telegram')}
            >
              Telegram
            </a>
            <a
              href="https://wa.me/77052771150"
              onMouseEnter={() => setHoveredSocial('whatsapp')}
              onMouseLeave={() => setHoveredSocial(null)}
              className={getFooterLinkClass(hoveredSocial, 'whatsapp')}
            >
              WhatsApp
            </a>
            <a
              href="https://www.behance.net/ronindsgn"
              onMouseEnter={() => setHoveredSocial('behance')}
              onMouseLeave={() => setHoveredSocial(null)}
              className={getFooterLinkClass(hoveredSocial, 'behance')}
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
