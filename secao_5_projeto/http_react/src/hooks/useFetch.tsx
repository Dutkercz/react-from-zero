import { useEffect, useState } from 'react'

export const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const dataJson = await res.json();
            setData(dataJson);
        };

        fetchData();
    }, [url]);

    return { data };
};