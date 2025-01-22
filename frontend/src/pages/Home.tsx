import React, { useEffect, useState } from "react";
import { createUser } from "../api";
import Clicker from "../components/Clicker";
import { getUserData } from "../api";
import Loader from "../components/Loader";

const Home: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [userData, setUserData] = useState<{
    totalPoints: number;
    prizes: number;
  } | null>(null);

  useEffect(() => {
    const setupUser = async () => {
      const storedUserId = localStorage.getItem("userId");

      if (storedUserId) {
        try {
          const { data } = await getUserData(storedUserId);
          setUserId(storedUserId);
          setUserData({ totalPoints: data.totalPoints, prizes: data.prizes });
        } catch (err) {
          console.error("Failed to fetch user data:", err);
        }
      } else {
        try {
          const { data } = await createUser("test-user");
          setUserId(data._id);
          setUserData({ totalPoints: data.totalPoints, prizes: data.prizes });
          localStorage.setItem("userId", data._id);
        } catch (err) {
          console.log(err);
        }
      }
    };

    setupUser();
  }, []);

  if (!userData) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Clicker
        userId={userId}
        initialScore={userData.totalPoints}
        initialPrizes={userData.prizes}
      />
    </div>
  );
};

export default Home;
