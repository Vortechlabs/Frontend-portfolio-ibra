import Aurora from "@/components/Aurora";
import ArrowUpRigtIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'YouTube',
    href: '#',
  },
  {
    title: 'Github',
    href: '#',
  },
  {
    title: 'Instagram',
    href: '#',
  },
  {
    title: 'TikTok',
    href: '#',
  },
]

export const Footer = () => {
  return (
    <footer className="relative -z-80 overflow-x-clip">
      <div className="rotate-180 absolute inset-0 h-[400px] -mt-28 md:-mt-80 bottom-0 min-w-screen -z-10 opacity-50">
        <Aurora />
      </div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">  
            {footerLinks.map(link => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRigtIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
