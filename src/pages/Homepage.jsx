import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Loader from "../components/Loader";
import Canvas from "../components/Canvas";
import Cursor from "../components/Cursor";
import logo from "../assets/images/logo.png";
import octocatImage from "../assets/images/octocat.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import validateGithubUsername from "../utils/validateGithubUsername";

const Homepage = () => {
  const navigateTo = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [ghUsername, setGhUsername] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => localStorage.clear(), []);

  const handleInputChange = (e) => setGhUsername(e.target.value);

  const handleSubmit = async (e) => {
    if (e.type === "click" || e.key === "Enter") {
      e.preventDefault();
      if (!ghUsername) return setShowModal(true);
      setLoader(true);
      const isValidUsername = await validateGithubUsername(ghUsername);
      setLoader(false);
      isValidUsername ? navigateTo("/stats") : setShowModal(true);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          alert="Alert!"
          alertError="Enter a valid GitHub username!"
          closeModal={() => setShowModal(false)}
        />
      )}
      {loader && <Loader />}
      <Canvas />
      <Cursor />
      <div className="mainContainer min-h-[100dvh] w-[100%] relative flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="absolute w-[10rem] vvsm:w-[15rem] gsm:w-[20rem] top-[0.5rem] left-[0.5rem] gsm:top-[1rem] gsm:left-[1rem]" />
        <div className="contentContainer flex flex-col justify-center items-center gap-[1rem] gsm:gap-[2rem]">
          <img src={octocatImage} alt="octocat" className="w-[10rem] vsm:w-[12rem] gsm:w-[15rem]" />
          <div className="inputContainer flex flex-col gsm:flex-row gap-[1rem] justify-center items-center gsm:items-stretch">
            <input
              type="text"
              className="inputBox bg-lightBlue px-[0.5rem] pl-[1rem] vvsm:px-[1rem] vvsm:pl-[1.5rem] vsm:px-[1.5rem] vsm:pl-[2rem] rounded-[5rem] text-[#505957] text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.4rem] gsm:text-[1.7rem] font-primary font-semibold outline-none"
              placeholder="Enter Github Username..."
              onChange={handleInputChange}
              onKeyDown={handleSubmit}
            />
            <Link to="/stats">
              <FaRegArrowAltCircleRight
                className="text-[2rem] vsm:text-[2.5rem] gsm:text-[4rem] text-lightBlue cursor-pointer hover:text-darkBlue hover:bg-lightGrey rounded-[50%] p-[0.2rem]"
                onClick={handleSubmit}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
