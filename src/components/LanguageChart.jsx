import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// eslint-disable-next-line react/prop-types
function LanguageChart({data}) {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    

    const chartCanvas = chartContainer.current;

    if (chartCanvas) {
      // Destroy previous chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new chart instance
      chartInstance.current = new Chart(chartCanvas, {
        type: "pie",
        data: {
          // eslint-disable-next-line react/prop-types
          labels: data.map((row) => row.name),
          datasets: [
            {
              label: "Lines of Code",
              // eslint-disable-next-line react/prop-types
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    }
  }, []);

  return (
    <>
      <div className="text-center">
        <div style={{ width: "18rem" }}>
          <canvas id="myChart" ref={chartContainer}></canvas>
        </div>
      </div>
    </>
  );
}

export default LanguageChart;
