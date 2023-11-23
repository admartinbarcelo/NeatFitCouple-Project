import images from "../../constants/images";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.dumbell} alt="spoon" className="dumbell__img" />
  </div>
);

export default SubHeading;