import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem("feedbackPoints");
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem("feedbackPoints", JSON.stringify(points));
  }, [points]);

  const handleClick = (point) => {
    setPoints({ ...points, [point]: points[point] + 1 });
  };
  const totalFeedback = Object.values(points).reduce(
    (acc, point) => acc + point,
    0
  );
  const positivePercentage =
    totalFeedback > 0 ? Math.round((points.good / totalFeedback) * 100) : 0;
  const resetPoints = () => {
    setPoints({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="wrapperApp">
      <Description />
      <Options
        handleClick={handleClick}
        points={Object.keys(points)}
        resetPoints={resetPoints}
        setPoints={setPoints}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          points={[
            ...Object.entries(points),
            ["Total", totalFeedback],
            ["Positive", positivePercentage + "%"],
          ]}
          positive={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
