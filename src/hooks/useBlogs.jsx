import { useEffect, useState } from "react";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/blogData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch blog data');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { blogs, loading, error };
};

export default useBlogs;