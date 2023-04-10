import { useDispatch } from "react-redux";
import { openModal } from "../../data/slices/modals";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="home_page">
      <h3>home page</h3>
      <button onClick={() => dispatch(openModal("modal-example"))}>
        open modal
      </button>
    </div>
  );
};

export default Home;
