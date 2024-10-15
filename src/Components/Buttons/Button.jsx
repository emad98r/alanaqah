import "./button.scss";
import { useNavigate } from "react-router-dom";
function Button(props) {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <button type={props.type} onClick={() => handleClick(props.to)}>
      {props.text}
    </button>
  );
}

export default Button;
