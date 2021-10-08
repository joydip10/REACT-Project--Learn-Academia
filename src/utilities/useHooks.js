import { useState, useEffect } from 'react';
const useHooks=(url)=>{
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return [data,setData];
}

export default useHooks;