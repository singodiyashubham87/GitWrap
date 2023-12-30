const Footer = () => {
  return (
    <footer className={`w-[100%] bg-darkGrey pt-[1rem] flex justify-center items-center`}>
      <small className="w-[80%] vsm:text-[1.2rem] gsm:text-[1.2rem] md:text-[1.5rem] text-lightGrey font-secondary leading-0 text-center">
        Designed & Developed by
        <span className="text-lightRed cursor-pointer">
          <a
            href="https://shubham-s-socials.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold uppercase hover:text-lightBlue hover:font-bold ml-[0.3rem]"
          >
            Master Mickey
          </a>
        </span>
      </small>
    </footer>
  );
};

export default Footer;
