import { useNavigate, useParams } from "react-router-dom";
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params,"params");
    return <Component navigate={navigate} params={params} {...props} />;
  };
  return Wrapper;
};