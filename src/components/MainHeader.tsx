import headerImage from "../assets/home-background.png";
import Container from "./UI/Container";

const MainHeader = () => {
  return (
    <header
      className="w-full bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col h-[40vh]"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <Container>
        <h1 className="text-white font-poppins font-bold text-4xl text-center">
          Awesome Events in <br /> Finland
        </h1>
        <small className="font-poppins text-grey font-thin text-sm text-center -mt-6">
          An interactive online experienced by the community, free for everyone{" "}
        </small>
      </Container>
    </header>
  );
};

export default MainHeader;
