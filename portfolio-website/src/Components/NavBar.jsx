const NavBar = () => {
  return (
    <div className="fixed top-0 w-screen h-36 bg-gray-900 text-white shadow-lg space-x-8 text-2xl">
      <div className="flex justify-center items-center">
        <img
          src={require("../Assets/Logo.png")}
          alt="logo"
          className=" h-36 "
        ></img>
        <div className="fixed right-0 flex-row shadow-lg space-x-8 mr-11 pt-4">
          <i>About</i>
          <i>Projects</i>
          <i>Contact</i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
