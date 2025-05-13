import React from "react";
import Picture from "/zave.png";

interface AboutProps {
  
}

const About: React.FC<AboutProps> = () => {
  const handleContactClick = () => {
    const whatsappUrl =
      "whatsapp://send?phone=&text=Hi%20Charles%20vincent";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main
      id="about"
      className="flex justify-center font-[times-new-roman] items-center w-full"
    >
      <section className="w-[80%] my-10">
        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <hr className="border-b-2 md:w-[5%] w-[40%] border-[#297B67]" />
        </div>
        <section className="md:flex justify-between w-full py-3">
          <div className="md:w-[40%] w-full">
            <p className="mb-10 leading-[30px]">
              Hello! I am a web designer and developer who creates engaging and
              user-friendly websites. My work combines creativity with technical
              expertise to deliver quality digital experiences.
            </p>
            <p className="leading-[30px]">
              Passionate about collaborations, I work closely with clients to
              bring their visions to life, ensuring that each project meets
              their needs and stands out in the online world.
            </p>
          </div>
          <div className="mx-10 md:w-[30%]">
            <img
              src={Picture}
              alt="Charles Vincent"
              className="md:w-[280px] w-[240px] md:h-[360px] h-[300px] object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2 md:w-[40%] w-full">
            <p className="mb-6 leading-[30px]">
              In addition to my design and development skills, I am also
              committed to continuous learning and growth in the ever-evolving
              tech landscape. This eagerness for improvement not only benefits
              me but also inspires those around me to strive for excellence in
              their own work.
            </p>
            <p>Name: Charles Vincent</p>
            <p>
              Email:{" "}
              <a href="mailto:CharlesVincent@gmail.com">CharlesVincent@gmail.com</a>
            </p>
            <p>Phone: +234 8167643698</p>
            <p>Github: Charles Vincent</p>
            <button
              className="bg-[#297B67] p-3 rounded-full text-white w-full md:w-[8vw] transition-transform transform hover:scale-105 mt-3"
              aria-label="Contact Charles Vincent"
              onClick={handleContactClick}
            >
              Contact me
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
