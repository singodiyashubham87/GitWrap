import logo from "../assets/images/webLogo.png"

const Loader = () => {
  return (
    <div className="loaderContainer w-[100vw] fixed top-[0] bottom-[0] right-[0] left-[0] bg-[#272829] flex justify-center items-center opacity-[90%] z-[2]">
      <img
        id="logo"
        src={logo}
        alt="loader"
        className="p-[1rem] border-4 border-white w-[150px] sm:w-[200px] rounded-[50%] animate-spin duration-500"
      />
    </div>
  )
}

export default Loader;