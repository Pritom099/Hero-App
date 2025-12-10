import axios from "axios"
import { useEffect, useState } from "react"


const useApps = () =>{
     const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios('../appsData.json')
        .then(data => setProducts(data.data))
    },[])

    return {products}
}

export default useApps