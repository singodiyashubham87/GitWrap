import logo from "../assets/images/logo.png";
import octocatImage from "../assets/images/octocat.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import validateGithubUsername from "../utils/validateGithubUsername";
import Loader from "../components/Loader";

const Homepage = () => {
  const navigateTo = useNavigate(); // Navigation control
  const [showModal, setshowModal] = useState(false);
  const [ghUsername, setGhUsername] = useState("");
  const [loader, setLoader] = useState(false); //loader variable

  // Show & Hide Loader component
  const showLoader = () => setLoader(true);
  const hideLoader = () => setLoader(false);

  // Update Github Username value when user type in the input box
  const handleInputChange = (e) => {
    setGhUsername(e.target.value);
  };

//   const handleKeyDown = (e) => {
//     if(e.key === "Enter") 
//         console.log(e);
//   }

  const handleSubmit = async (e) => {
    if(e.type === "click"){
        e.preventDefault();
    }else{
        if(e.key !== "Enter"){
            return;
        }
    }

    // if input is empty then show modal popup 
    if(!ghUsername){
        openModal();
        return;
    }

    showLoader();
    const isValidUsername = await validateGithubUsername(ghUsername);
    if (!isValidUsername) {
        hideLoader();
      openModal();
    } else {
      localStorage.setItem("ghUsername", ghUsername);
      hideLoader();
      navigateTo("/stats");
    }
  };

  // Show & Hide Model
  const openModal = () => setshowModal(true);
  const closeModal = () => setshowModal(false);

  return (
    <>
      {showModal && (
        <Modal
          alert="Alert!"
          alertError="Enter a valid GitHub username!"
          closeModal={closeModal}
        />
      )}
      {loader && <Loader />}
      <div className="mainContainer min-h-[100dvh] w-[100%] relative flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className="absolute w-[10rem] vvsm:w-[15rem] gsm:w-[20rem] top-[0.5rem] left-[0.5rem] gsm:top-[1rem] gsm:left-[1rem]"
        />
        <div className="contentContainer flex flex-col justify-center items-center gap-[1rem] gsm:gap-[2rem]">
          <img
            src={octocatImage}
            alt="octocat"
            className="w-[10rem] vsm:w-[12rem] gsm:w-[15rem]"
          />
          <div className="inputContainer flex gap-[1rem] justify-center items-stretch ">
            <input
              type="text"
              className="inputBox bg-lightBlue px-[0.5rem] pl-[1rem] vvsm:px-[1rem] vvsm:pl-[1.5rem] vsm:px-[1.5rem] vsm:pl-[2rem] rounded-[5rem] text-[#505957] text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.4rem] gsm:text-[1.7rem] font-semibold outline-none"
              placeholder="Enter Github Username..."
              onChange={handleInputChange}
              onKeyDown={handleSubmit}
            />
            <Link to="/stats">
              <FaRegArrowAltCircleRight
                className="text-[2rem] vsm:text-[2.5rem] gsm:text-[4rem] text-lightBlue cursor-pointer hover:text-darkBlue"
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
