export const TitleAndDescription = ({ h2label, h1label }) => {
  return (
    <div>
      <h1 style={H1style}>{h1label}</h1>
      <h2 style={H2style}>{h2label}</h2>
    </div>
  );
};
const H1style = {
  height: "120px",
  width: "514px",
  color: "black",
  alignItem: "center",
  weight: "400px",
  fontSize: "48px",
};
const H2style = {
  fontSize: "18px",
  weight: "700",
  color: "#182D40",
  height: "58px",
  width: "323.85px",

  LineHeight: "29.37px",
};
