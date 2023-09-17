const Container = (props) => {
  return (
    <div className="w-[80%] max-w-5xl mx-auto flex flex-col gap-8">
      {props.children}
    </div>
  );
};

export default Container;
