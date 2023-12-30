/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import getDayIndex from "../utils/getDayIndex";

import LanguageChart from "../components/LanguageChart";

// import Days Name images
import sunday from "../assets/images/sunday.png";
import monday from "../assets/images/monday.png";
import tuesday from "../assets/images/tuesday.png";
import wednesday from "../assets/images/wednesday.png";
import thursday from "../assets/images/thursday.png";
import friday from "../assets/images/friday.png";
import saturday from "../assets/images/saturday.png";


const ChartAndProductiveDay = (props) => {
  const {
    langArray,
    langButton,
    handleLangButton,
    mostProductiveDate,
  } = props;
  
  // Day-related states
  const [dayIndex, setDayIndex] = useState(null);
  const [dayImage, setDayImage] = useState(null);

  // Effect to update day index based on most productive date
  useEffect(() => {
    if (mostProductiveDate) {
      setDayIndex(getDayIndex(mostProductiveDate));
    }
  }, [mostProductiveDate]);

  // Effect to set day image based on day index
  useEffect(() => {
    if (dayIndex !== null) {
      switch (dayIndex) {
        case 0:
          setDayImage(sunday);
          break;
        case 1:
          setDayImage(monday);
          break;
        case 2:
          setDayImage(tuesday);
          break;
        case 3:
          setDayImage(wednesday);
          break;
        case 4:
          setDayImage(thursday);
          break;
        case 5:
          setDayImage(friday);
          break;
        case 6:
          setDayImage(saturday);
          break;
        default:
          setDayImage(null);
      }
    }
  }, [dayIndex]);

  return (
    <div className="piechartAndDay w-[100%] msm:w-[85%] gsm:w-[75%] md:w-[95%] flex flex-col md:flex-row justify-center items-center p-[1rem] gap-[2rem] md:gap-[3rem]">
      {langButton ? (
        <button
          className="text-center w-[80%] md:w-[25%] lg:w-[30%] px-[1rem] pt-[1rem] font-secondary text-lightGrey hover:text-darkGrey hover:bg-lightBlue text-[1rem] md:text-[1.2rem] bg-darkGrey rounded-[0.625rem] font-semibold uppercase"
          onClick={handleLangButton}
        >
          Get Most Used Languages
        </button>
      ) : (
        <div className="pieChart text-center flex flex-col gap-[1rem] justify-center items-center w-[50%]">
          {langArray && <LanguageChart data={langArray} />}
          <h2 className="chartTitle font-secondary text-lightRed text-[1.8rem]">
            Most Used Languages
          </h2>
        </div>
      )}
      <div className="productiveDay flex flex-col gap-4 justify-center items-center w-[100%] md:w-[50%]">
        <div className="productiveDayImage w-[15rem] vsm:w-[20rem] md:w-[23rem] overflow-hidden">
          <img
            src={dayImage || monday}
            alt="mostProductiveDay"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="chartTitle font-secondary text-lightRed text-[1rem] vsm:text-[1.3rem] text-center uppercase">
          Most Productive Day
        </h2>
      </div>
    </div>
  );
};

export default ChartAndProductiveDay;
