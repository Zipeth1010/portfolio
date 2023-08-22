const ProjectsComponent = () => {
  return (
    <div className=" bg-gray-900 justify-center items-center">
      <img src={require("../Assets/ProjectLogo.png")} />
      <div className="grid w-[736px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 px-5 bg-gray-900 text-white">
        <div className=" relative">
          <img
            className=" opacity-25 w-[700px] h-[395px] p-3"
            src={require("../Assets/BoardGameReviews.png")}
          />
          <div className="absolute bottom-0 left-0 right -0 px-4 py-2 bg-gray-900 opacity-70">
            <h3 className=" text-xl">Board Game Reviews</h3>
            <br />
            <p className="p-2">
              A board game review website to handle different users, who can log
              in via their own usernames. They can write reviews, vote on other
              reviews and comment their opinions on a review!
            </p>
          </div>
        </div>
        <div className=" relative">
          <img
            className=" opacity-25 w-[700px] h-[395px] p-3"
            src={require("../Assets/getQuacked.png")}
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-70">
            <h3 className=" text-xl">Get Quacked</h3>
            <br />
            <p className="p-2">
              A HTML5 compatible game where the duck gets revenge against its
              hunters by shooting them with her eggs instead! Rounds get harder
              as the game progresses, so good luck getting that highscore!
            </p>
          </div>
        </div>
        <div className=" relative">
          <img
            className=" opacity-25 w-[700px] h-[395px] p-3"
            src={require("../Assets/DictionaryApp.png")}
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-70">
            <h3 className=" text-xl">Dictionary App</h3>
            <br />
            <p className="p-2">
              An IOS compatible dictionary app made with React Native.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
