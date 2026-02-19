import Link from 'next/link'
import React from 'react'
import { Youtube, Instagram, Github, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-theme-bg-dark border-t border-black/5 pt-20 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Left Column: Brand & Legal */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-gray-600">
                Glow Journey
              </h3>
              <p className="text-sm text-gray-600 max-w-sm">
                Empowering artists with professional makeup tutorials and resources. Join the future of beauty education today.
              </p>
            </div>

            <div className="space-y-4 pt-4 lg:pt-12">
              <div className="flex gap-6 text-sm text-gray-600">
                <Link href="/terms" className="hover:text-theme-accent transition-colors">Legal Stuff</Link>
                <Link href="/policy" className="hover:text-theme-accent transition-colors">Privacy Policy</Link>
                <Link href="/security" className="hover:text-theme-accent transition-colors">Security</Link>
              </div>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-theme-accent transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-theme-accent transition-colors">Careers</Link></li>
                <li><Link href="/partners" className="hover:text-theme-accent transition-colors">Partners</Link></li>
                <li><Link href="/news" className="hover:text-theme-accent transition-colors">News</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/courses" className="hover:text-theme-accent transition-colors">Courses</Link></li>
                <li><Link href="/portfolio" className="hover:text-theme-accent transition-colors">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-theme-accent transition-colors">Blog</Link></li>
                <li><Link href="/faq" className="hover:text-theme-accent transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Connect</h4>
              <div className="flex flex-col space-y-3">
                <Link href="https://www.youtube.com/@GlowJourney" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-theme-accent transition-colors">
                  <Youtube className="w-4 h-4" /> YouTube
                </Link>
                <Link href="https://www.instagram.com/glowjourney" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-theme-accent transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </Link>
                {/* <Link href="https://github.com/glowjourney" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-theme-accent transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </Link> */}
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar: Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-black/5 pt-8 mb-12">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Glow Journey, Inc.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Created with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by</span>
            <Link
              href="https://www.gtwebdevelopers.in/"
              target="_blank"
              className="hover:text-theme-accent transition-colors font-medium"
            >
              GTweb Developers
            </Link>
          </div>
        </div>
      </div>

      {/* Giant Typography */}
      <div className="w-full flex justify-center items-end pt-10">
        <h1 className="text-[12vw] sm:text-[14vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/5 to-transparent select-none pointer-events-none transform translate-y-[10%]">
          Glow Journey
        </h1>
      </div>
    </footer>
  )
}

export default Footer