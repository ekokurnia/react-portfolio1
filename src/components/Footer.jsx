import Button from "./Button";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-4 h-[377px]">
      <h2 className="text-center text-[1.5rem] mb-4 max-w-[250px] md:max-w-fit">So, What are you waiting for?</h2>
      <Button className="mx-auto block">Let's Start</Button>
    </div>
  );
};

export default Footer;
