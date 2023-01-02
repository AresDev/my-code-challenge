import { useParams } from "react-router-dom";

const Profile = () => {
  let params = useParams();
  return <h2>Invoice: {params.id}</h2>;
};

export default Profile;
