import { subttasks, image, image1, image2, image3, image4, image5, flutter, bootstrap, tailwind, androidStudio } from "../assets";
import { socialMedia } from "./constants/constant";
import Button from "./Button";
import Card from "./Card";

const Hero = () => {
  return (
    <div className=" relative py-[48px] text-main xl:px-4 ">
      <div className="flex flex-col xl:flex-row justify-between xl:items-center">
        <p className="text-[33px] md:text-[72px] font-light leading-[120%] mr-2">
          Let’s learn <img src={subttasks} className=" md:w-[56px] inline-block" />
          <br />
          to code <br /> an application
        </p>
        <div className="flex flex-col gap-4 pl-2">
          <p className="mt-9 leading-[120%] font-[400] md:max-w-[50%] xl:max-w-[375px] xl:leading-[160%]">
            I'am <span className="text-brand ">Eko Kurniawan</span>, a software developer who loves to share how to code in many programing languages and multi platforms.
          </p>
          <div className="hidden w-fit xl:block">
            <Button>Start Learn</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8 xl:hidden">
        <Button>Start Learn</Button>
        <ul className="flex gap-4 md:flex-col md:absolute right-0 xl:hidden">
          {socialMedia.map((a) => {
            return (
              <li key={a.id}>
                <a href={a.url} aria-label={a.name} target="_blank">
                  <img src={a.icon} alt="" width={24} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between items-center mt-[56px] gap-3 xl:gap-9">
        <Card img={image} title="Bookies" badge1={flutter} badge3={androidStudio} badge2={bootstrap} description="Read digital book app" />
        <Card img={image1} title="Tailwindcss" badge1={tailwind} description="Learn Tailwindcss" />
        <Card img={image2} title="Bookies" badge1={bootstrap} description="Read digital book app" />
        <Card img={image3} title="Android Studio" badge1={androidStudio} description="Read digital book app" />
        <Card img={image4} title="Bookies" badge1={flutter} description="Read digital book app" />
        <Card img={image5} title="Bookies" badge1={flutter} description="Read digital book app" />
      </div>
      <div className="w-fit mx-auto mt-5">
        <Button variant="ghost">Load More</Button>
        {/* <Button style={{ backgroundColor: "transparent", color: "#393F48" }}>Load More</Button> */}
      </div>
    </div>
  );
};

export default Hero;
