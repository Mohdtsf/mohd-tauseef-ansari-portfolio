'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-50 w-full px-2">
        <div className={cn('mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
                className="relative z-50 block cursor-pointer p-2 lg:hidden text-gray-300 hover:text-white transition-colors">
                {menuState ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white hover:text-shadow-neon font-medium transition-all block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile & Desktop Buttons */}
            <div className={cn("bg-background/95 backdrop-blur-md mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none", menuState ? "block" : "hidden")}>
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-gray-300 hover:text-white font-medium block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit mt-6 lg:mt-0">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto lg:hidden">
                  <Link href="https://github.com" target="_blank">
                    <span>Github</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn("w-full sm:w-auto", isScrolled ? 'lg:inline-flex' : '')}>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <span>Resume</span>
                  </a>
                </Button>
                {/* Keep the "Resume" visible un-scrolled on Desktop too to retain previous UX, or just follow their exact code where it's only on scroll. Their logic was `lg:inline-flex` if scrolled else `hidden`. I will honor it exactly: */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
