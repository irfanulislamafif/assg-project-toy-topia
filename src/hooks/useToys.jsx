import { useEffect, useState } from "react";

const useToys = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // 1. Error state added

    useEffect(() => {
        fetch('/toydata.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setToys(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load toys:", err);
                setError(err.message); // 2. Set error message
                setLoading(false);
            });
    }, []);

    return { toys, loading, error }; // 3. Return error
};

export default useToys;