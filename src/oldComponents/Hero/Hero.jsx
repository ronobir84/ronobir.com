
import { IoArrowDownOutline, IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";





const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = myPdfFile;
    link.download = 'Resume-Ronobir Das';
    link.click();
  };



  return (
    <section
      id="home"
      className="min-h-screen mt-16 flex py-10 md:flex-row flex-col items-center gap-10 px-16"
    >
      <div className=" flex items-center justify-center h-full px-10 md:px-0">
        
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center mt-10 md:mt-0">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Ronobir Das</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <p className="text-justify text-gray-600 leading-7 mx-auto">Self-taught programmer with proficiency in MERN stack, solid understanding of JavaScript, HTML and CSS. Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.</p>

          {/* <a href="public\Mohon Saha-Full Stack Developer.pdf" download> */}
            <button onClick={handleDownload} className="btn-primary mt-6">Download Resume <IoArrowDownOutline className="animate-bounce"></IoArrowDownOutline>
            </button>

          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">
            <a href="" target="_blank"><IoLogoLinkedin className="cursor-pointer text-gray-600 hover:text-white duration-300"></IoLogoLinkedin></a>
            <a href="https://github.com/ronobir84" target="_blank"><IoLogoGithub className="cursor-pointer text-gray-600 hover:text-white duration-300"></IoLogoGithub></a>
            <a href="https://www.facebook.com/priashdas.priashdas.75/" target="_blank"><IoLogoFacebook className="cursor-pointer text-gray-600 hover:text-white duration-300"></IoLogoFacebook></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;