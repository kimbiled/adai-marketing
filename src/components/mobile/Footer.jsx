import hero from '../../assets/desktop/Hero.svg';

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Останавливаем стандартный переход
    const isHomePage = window.location.pathname === '/'; // Проверяем, на главной ли мы

    if (!isHomePage) {
      sessionStorage.setItem('scrollTo', targetId); // Сохраняем ID в sessionStorage
      window.location.href = '/'; // Делаем редирект на главную
    } else {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 100; // Если есть фиксированный хедер
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const links = [
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms and Conditions', url: '/terms-and-conditions' },
    { label: 'Cookie Policy', url: '/cookie-policy' },
  ];
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="font-ppneue mx-auto mt-24 mb-9 flex w-[85%] flex-col bg-white">
      <img
        src={hero}
        alt="adai marketing"
        className="w-[274px] max-w-full"
      />

      <div className="mt-9 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 font-book">
          <p className="text-[14px] leading-[18px] text-[#637695]">Social</p>
          <a
            href="https://www.instagram.com/ronin.dsgn/"
            className="text-[16px] leading-[22px] hover:text-gray-500"
          >
            Instagram
          </a>
          <a
            href="https://t.me/jedikuna"
            className="text-[16px] leading-[22px] hover:text-gray-500"
          >
            Telegram
          </a>
          <a
            href="https://wa.me/77052771150"
            className="text-[16px] leading-[22px] hover:text-gray-500"
          >
            WhatsApp
          </a>
          <a
            href="https://www.behance.net/ronindsgn"
            className="text-[16px] leading-[22px] hover:text-gray-500"
          >
            Behance
          </a>
        </div>

        <div className="flex flex-col gap-6 font-book">
          <p className="text-[14px] leading-[18px] text-[#637695]">Menu</p>
          <button
            onClick={(e) => handleScroll(e, 'about')}
            className="cursor-pointer text-left text-[16px] leading-[22px] transition hover:text-gray-500"
          >
            About us
          </button>
          <button
            onClick={(e) => handleScroll(e, 'services')}
            className="cursor-pointer text-left text-[16px] leading-[22px] transition hover:text-gray-500"
          >
            Services
          </button>
          <button
            onClick={(e) => handleScroll(e, 'recentProjects')}
            className="cursor-pointer text-left text-[16px] leading-[22px] transition hover:text-gray-500"
          >
            Works
          </button>
          <button
            onClick={(e) => handleScroll(e, 'blog')}
            className="cursor-pointer text-left text-[16px] leading-[22px] transition hover:text-gray-500"
          >
            Blog
          </button>
        </div>
      </div>

      <hr className="mt-14 mb-10 border-t border-black border-opacity-10" />

      <div className="flex flex-col gap-3 text-[10px] font-book leading-[14px]">
        {links.map((link, index) => (
          <p
            key={index}
            onClick={() => handleRedirect(link.url)}
            className="cursor-pointer text-[#090C21] transition duration-300 hover:text-[#FF9500]"
          >
            {link.label}
          </p>
        ))}
        <p className="mt-1 text-[#637695]">© Adai Marketing 2026</p>
      </div>
    </footer>
  );
}
