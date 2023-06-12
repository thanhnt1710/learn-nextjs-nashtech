//Client side rendering --> without redering

// import { useEffect, useState } from "react"
import useSWR from 'swr';

export default function Products() {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //             const products = await res.json();
    //             setProducts(products);
    //         }
    //         catch (e) {
    //             console.log(e)
    //         }
    //     }
    //     fetchProducts();
    // }, []);

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:4000/users');
        return res.json();
    }

    const { data: products, error, isLoading } = useSWR('getProducts', fetchProducts);

    // has error
    if (error) return <div>Error occur {JSON.stringify(error)}</div>

    // has loading
    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {products?.map((product: any) =>
                <li key={product?.id}>
                    {product?.name}
                </li>)
            }
        </div>
    )
}