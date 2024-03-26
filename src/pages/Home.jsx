import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-5xl underline">Home</h1>
            <button onClick={() => navigate("/addshow")}>Add Show</button>
        </div>
    );
}