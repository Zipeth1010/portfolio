const AboutComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-12 mt- px-5 bg-gray-900 text-white mt-44">
      <div className="flex flex-col w-full items-center justify-center pl-5">
        <h3 className=" font-extrabold underline">My Journey</h3>
        <br />
        <p className=" text-center m-4">
          I started my coding journey as of December 2022, and in that time I
          have done a lot of self learning and attended a software engineering
          bootcamp. The result of my studies has made me proficient in
          JavaScript on both the Front-End and Back-End so far with more to
          come.
          <br />
          <br />
          Before coding, I was a professional gamer for around 3 and a half
          years, playing Apex Legends at international standards competing for
          prize money in tournaments. At my peak, I was ranked the number 1
          player worldwide for approximately 5 months concurrently, out of over
          100 million total unique players, and garnered over 80000 followers on
          'Twitch' as a result. It was during this time that I discovered
          software development through members of my community and started to
          take a big interest in Software & Web Development.
          <br /> <br />I am extremely motivated to continue learning how to
          improve and will continue doing so until I am able to land my first
          Junior role in the industry. After completing the bootcamp, I realized
          that although I know how to develop on the Front-End and Back-End, my
          CSS skills were sub-optimal so this portfolio website is a project of
          mine to improve my knowledge in the area. I used TailwindCSS as
          opposed to Bootstrap for this project as the component orientated
          design of bootstrap allows for less freedom in the long-run.
        </p>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <img
          src={require("../Assets/Me.JPG")}
          className=" aspect-auto m-5"
        ></img>
      </div>
    </div>
  );
};

export default AboutComponent;
