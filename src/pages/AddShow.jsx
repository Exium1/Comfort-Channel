import { useNavigate } from "react-router-dom"

export const AddShow = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Add Show</h1>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
}