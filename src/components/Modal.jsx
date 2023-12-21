const Modal = (props) => {
    // eslint-disable-next-line react/prop-types
    const { alert, alertError, closeModal } = props;
  
    return (
      <>
        <div
          onClick={closeModal}
          className="wrapper top-[0] bottom-[0] right-[0] left-[0] bg-[#272829] fixed opacity-[90%] z-[5]"
        ></div>
        <div className="modalContainer w-[90%] vsm:w-[75%] sm:w-[55%] gsm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[37%] xxl:w-[35%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black border-2 border-[#fff] flex flex-col justify-center items-center px-[0.5rem] py-[1rem] md:px-[1rem] md:py-[2rem] xl:px-[2rem] xl:py-[3rem] font-primary z-[10]">
          <h1 className="font-primary font-semibold text-white text-[1.3rem] md:text-[1.7rem] xl:text-[2rem] text-white z-[10]">
            {alert || "Alert!"}
          </h1>
          <p className="font-primary font-bold text-[fa8a34] text-center sm:m-[0.5rem] my-[1rem] sm:my-[1.5rem] md:m-[1.5rem] xl:m-[2rem] text-[1.3rem] vsm:text-[1.5rem] xl:text-[2rem] md:text-[1.7rem] text-[#f10302]">
            {alertError}
          </p>
          <button
            onClick={closeModal}
            className="font-primary font-semibold close md:text-[1.5rem] text-white border border-[#fff] hover:bg-[#fff] hover:text-black px-[1rem] py-[.5rem] xl:px-[3rem] xl:py-[1rem]"
          >
            Close
          </button>
        </div>
      </>
    );
  };
  
  export default Modal;