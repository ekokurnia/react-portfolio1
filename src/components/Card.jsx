const Card = ({ img, badge1, badge2, badge3, title, description }) => {
  return (
    <div className="scroll-smooth flex flex-col justify-center border-2 border-dashed max-w-[320px] xl:max-w-[392px] h-[320px] xl:w-[392px] rounded-3xl p-3">
      <div className="rounded-[16px] overflow-hidden relative">
        <a href="#">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </a>
        <div className="flex flex-row-reverse gap-1 absolute right-4 top-4">
          <a href="#" className=" transition-transform ease-in-out hover:-translate-y-1">
            <img className={`${badge1 ? "w-9" : "hidden"}`} src={badge1} alt="" />
          </a>
          <a href="#" className=" transition-transform ease-in-out hover:-translate-y-1">
            <img className={`${badge2 ? "w-9" : "hidden"} `} src={badge2} alt="" />
          </a>
          <a href="" className=" transition-transform ease-in-out hover:-translate-y-1">
            <img className={`${badge3 ? "w-9" : "hidden"} `} src={badge3} alt="" />
          </a>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div>
          <h2 className="font-medium text-lg">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        {/* Avatar */}
        <div className="avatar-group scale-90 -space-x-5">
          <div className="avatar">
            <div className="w-10">
              <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-10 bg-neutral-focus text-neutral-content">
              <span className="text-xs">+99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
