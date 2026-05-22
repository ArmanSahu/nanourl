import { LinkIcon } from "../icons/Link-Icon"
import { Button } from "./button"
import { Wrapper } from "./wrapper";


export const Navbar = () => {

    const navigationStyles = "cursor-pointer hover:text-zinc-300" ;

    return <nav className="bg-primary-bg text-primary-text border-b border-secondary-bg/50 drop-shadow-sm drop-shadow-secondary-bg">
      <Wrapper>
        <div className="flex justify-between py-4">
          <div className="flex items-center gap-2 ">
            <div className="p-2 bg-primary-button rounded-md">
            <LinkIcon size="sm" />
            </div>
            <p className="text-2xl font-bold cursor-pointer">NanoUrl</p>
          </div>
          <div className="flex items-center gap-7">
            <p className={`${navigationStyles}`}>Home</p>
            <p className={`${navigationStyles}`}>About</p>
            <p className={`${navigationStyles}`}>Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
              <Button text="Log in" variant="secondary" size="md" />
              <Button text="Sign up" variant="primary" size="md" />
          </div>
        </div>
      </Wrapper>
    </nav>
}