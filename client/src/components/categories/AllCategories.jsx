import { useState } from "react";
import { CategoriesList } from "./CategoriesList";
import { useEffect } from "react";

export function AllCategories() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5417/api/categories', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setData(() => data.data);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <div className="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="display-1">All categories</h1>
                </div>
            </div>
            <CategoriesList data={data} />
        </div>
    );
}