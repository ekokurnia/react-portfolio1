const Button = ({ style, children, variant, className }) => {
  return (
    <button style={style} className={`${variant == "ghost" ? "btn btn-ghost text-main" : "btn btn-primary py-4 px-6"} ${className} border-[1px] border-brand rounded-full font-light`}>
      {children}
    </button>
  );
};

export default Button;
