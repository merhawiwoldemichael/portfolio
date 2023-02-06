import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Merhawi Woldemichael",
          "a software engineer",
          "a web developer",
         
        ]}
      />
    </h1>
  );
};
export default AnimationText;
