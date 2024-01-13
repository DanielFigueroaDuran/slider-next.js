import Link from "next/link"
import Logo from "@/components/widgets/Logo"


export const Header = () => {
  return (
    <header className="fixed w-full left-0 top-0 z-0">
      <div className="container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0">
        <section>
          <Logo />
        </section>
        <section>
          <ul className="hidden lg:flex items-center gap-x-8">
            <li>
              <Link
                href="/"
                className="relative text-white transition-colors duration-300 before:absolute before: left-0 
                  before:-bottom-2 before:w-full before:h-0.5 before:bg-white before:rounded-full 
                  before:transition-all before:duration-300 "
                  >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="relative text-white transition-colors duration-300 before:absolute before: left-0 
                  before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full 
                  before:transition-all before:duration-300 hover:before:w-full "
                  >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="relative text-white transition-colors duration-300 before:absolute before: left-0 
                  before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full 
                  before:transition-all before:duration-300 hover:before:w-full "
                  >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="relative text-white transition-colors duration-300 before:absolute before: left-0 
                  before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full 
                  before:transition-all before:duration-300 hover:before:w-full "
                  >
                Contacto
              </Link>
            </li>
          </ul>
          <button className="relative lg:hidden">
            <span className="absolute right-0 -top-4 w-8 h-0.5 bg-white"></span>
            <span className="absolute right-0 -top-2 w-8 h-0.5 bg-white"></span>
            <span className="absolute right-0 -top-0 w-8 h-0.5 bg-white"></span>
          </button>
        </section>
      </div>

    </header>
  )
}
