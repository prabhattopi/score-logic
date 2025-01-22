import React, { useState } from "react";
import { incrementPoints } from "../api";
import { toast } from "react-toastify";

interface ClickerProps {
  userId: string;
  initialScore: number;
  initialPrizes: number;
}

const Clicker: React.FC<ClickerProps> = ({
  userId,
  initialScore,
  initialPrizes,
}) => {
  const [score, setScore] = useState(initialScore);
  const [prizes, setPrizes] = useState(initialPrizes);

  const handleClick = async () => {
    try {
      const { data } = await incrementPoints(userId);

      if (data.points) {
        setScore((prev) => prev + data.points);
        if (data?.points === 10) {
          toast.success("You won 10 points!");
        }
      }
      if (data.prize) {
        setPrizes((prev) => prev + data.prize);
        toast.success("You won a prize!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Score and Prize Boxes */}
      <div className="flex gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-40">
          <h3 className="text-lg font-semibold text-gray-700">Score</h3>
          <p className="text-2xl font-bold text-blue-500">{score}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-40">
          <h3 className="text-lg font-semibold text-gray-700">Prizes</h3>
          <p className="text-2xl font-bold text-green-500">{prizes}</p>
        </div>
      </div>

      {/* Click Me Button */}
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition"
      >
        Click Me!
      </button>
    </div>
  );
};

export default Clicker;
