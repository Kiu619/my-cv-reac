import { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faPaperPlane, faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { useTab, TabType } from "../context/TabContext"

const Header: FC = () => {
  const { activeTab, setActiveTab } = useTab()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "resume" as TabType, label: "RESUME" },
    { id: "portfolio" as TabType, label: "PORTFOLIO" },
    { id: "blog" as TabType, label: "BLOG" },
    { id: "contact" as TabType, label: "CONTACT" }
  ]

  return (
    <div className="relative">
      <header className="flex justify-between h-[70px] items-center bg-white mb-10 shadow-[0_2px_92px_rgba(0,0,0,0.07)] rounded-lg">
        {/* Left Side */}
        <div className="flex items-center">
          {/* Home Button */}
          <button
            onClick={() => setActiveTab("home")}
            className="h-[70px] w-[70px] bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200 rounded-lg"
          >
            <FontAwesomeIcon icon={faHome} />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center h-[70px]">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    px-4 h-[70px] font-bold text-[14px]
                    ${activeTab === item.id ? "text-yellow-400" : "text-gray-700"}
                    hover:text-yellow-400 transition-colors duration-200
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center gap-4 px-4">
            <div className="flex items-center gap-1">
            <a href="" className={`w-[24px] h-[24px] hover:text-[#3b5998]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#1da1f2]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#c32aa3]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#ea4c89]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faDribbble} />
              </a>
            </div>

            <button className="bg-yellow-400 text-black font-medium rounded-full py-1 px-2 flex items-center text-[14px] hover:bg-yellow-500 transition-colors duration-200">
              Hire Me
              <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-1">
                <FontAwesomeIcon icon={faPaperPlane} className="text-black text-sm" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-[70px] h-[70px] flex items-center justify-center hover:text-yellow-400 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`
        lg:hidden fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 rounded-lg
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 hover:text-red-500 rounded-full"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>

          {/* Menu Items */}
          <nav className="mt-12 flex flex-col items-center">
            <ul className="flex flex-col items-center w-full">
              {navItems.map((item) => (
                <li key={item.id} className="w-full py-2 border-b border-gray-200">
                  <button
                    onClick={() => {
                      setActiveTab(item.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`
                      w-full py-2 font-bold text-[14px] text-center flex justify-center items-center
                      ${activeTab === item.id ? "text-yellow-400" : "text-gray-700"}
                      hover:text-yellow-400 transition-colors duration-200
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>



            <button className="bg-yellow-400 text-black font-normal rounded-full py-1 px-4 flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-200 justify-center my-5 ">
              Hire Me
              <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faPaperPlane} className="text-black text-sm" />
              </span>
            </button>

            <div className="flex items-center gap-4 mb-6 justify-center">
              <a href="" className={`w-[24px] h-[24px] hover:text-[#3b5998]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#1da1f2]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#c32aa3]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#ea4c89]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faDribbble} />
              </a>
            </div>

          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default Header
