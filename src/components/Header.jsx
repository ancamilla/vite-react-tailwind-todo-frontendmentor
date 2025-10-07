import MoonIcon from "./icons/IconMoon";

const Header = () => {
    return(
        <header className="container mx-auto px-4">
          <div className="flex justify-between">
            <h1 className="uppercase text-white px-4 pt-8 text-3xl font-semibold tracking-[0.3em]">
              Todo
            </h1>
            <button>
              <MoonIcon className="fill-red-400"/>
            </button>
          </div>
        
        </header>

    )
}

export default Header;