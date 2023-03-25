import { useState } from "react";
import { menu, socialMedia } from "./constants/constant";
import { CgMenu, CgClose } from "react-icons/cg";
import Button from "./Button";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleCheckboxChange = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <>
      <nav className="relative px-4 flex items-center justify-between py-3 md:px-4">
        <div className="flex items-center space-x-9">
          {/*  Logo  */}
          <div className="flex space-x-2 py-2">
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
              </div>
            </div>
            <h1 className="font-semibold text-l">It's Me</h1>
          </div>
          {/* Menu */}
          <ul className="space-x-8 hidden md:flex">
            {menu.map((list) => (
              <a key={list.id} href="#">
                <li className="text-sm">{list.name}</li>
              </a>
            ))}
          </ul>
        </div>

        {/* Right Buttons*/}
        <div className="flex space-x-2 items-center">
          <div className="flex gap-6">
            <ul className="hidden xl:flex gap-6 place-items-center">
              {socialMedia.map((a) => {
                return (
                  <li key={a.id}>
                    <a href={a.url} aria-label={a.name} target="_blank">
                      <img src={a.icon} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* CV Button */}
            <div className="tooltip tooltip-bottom" data-tip="Download as PDF ">
              <Button variant="ghost" className="text-[14px]">
                Download CV
              </Button>
            </div>
            {/* Hamburger Button */}
            {/* <input type="checkbox" className="peer " /> */}
            <label className=" swap swap-rotate md:hidden">
              <input type="checkbox" className="peer inset-x-0" checked={menuToggle} onChange={handleCheckboxChange} />
              <div className="swap-on">
                <CgClose size={24} widths={1} style={{ color: "#393F48" }} />
              </div>
              <div className="swap-off">
                <CgMenu size={24} widths={1} style={{ color: "#393F48" }} />
              </div>
            </label>
            {menuToggle && (
              <div
                className="transition-all duration-500 ease-in-out overflow-hidden max-h-[300px]
                absolute w-[300px] top-[80px] right-0 left-0 mx-auto rounded-md  bg-white/80 backdrop-blur shadow-md"
              >
                <ul className="flex items-center flex-col p-3">
                  {menu.map((list) => (
                    <a className="transition-all duration-300 ease-in-out w-full text-center hover:bg-brand/50 rounded-xl" key={list.id} href="#">
                      <li className="text-md block py-2">{list.name}</li>
                    </a>
                  ))}
                  <hr className="border-[1px] border-gray-200 w-full mt-[10px]" />
                  <Button style={{ margin: 20 }}>Download CV</Button>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
