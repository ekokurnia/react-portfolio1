const Testi = ({ className }) => {
  return (
    <div className={`${className} border-[1px] space-x-4 rounded-[23px] p-6 max-w-[320px] md:max-w-[394px]`}>
      <div className="flex items-center space-x-4 self-stretch">
        <div className="avatar">
          <div className="w-14 h-14 rounded-full">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
          </div>
        </div>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          <p>Adison Westervelt</p>
          <p className="text-brand text-sm overflow-hidden text-ellipsis whitespace-nowrap">Senior Proogram Manager at Microsoft</p>
        </div>
      </div>
      <p className="text-sm mt-4">
        Hendrerit diam a, morbi tristique egestas commodo ullamcorper ut. Aenean ipsum tempus, felis nibh amet mollis id sem sit. Venenatis aliquam tellus viverra nullam. Consequat cras ac donec nunc.
      </p>
    </div>
  );
};

export default Testi;
