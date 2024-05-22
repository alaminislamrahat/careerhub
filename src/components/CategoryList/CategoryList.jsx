import { useEffect, useState } from "react";
import SIngleCategoryItem from "../SingleCatagoryItem/SIngleCategoryItem";
// import { useLoaderData } from "react-router-dom";


const CategoryList = () => {
    const [categoryList,setCategoryList] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategoryList(data))
    },[])
    return (
        <div>
            <h2 className="text-6xl text-center">Category list : {categoryList.length}</h2>
            <p className="text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet autem illum, assumenda voluptatibus reiciendis impedit perferendis soluta totam quaerat!</p>
            <div className="my-20 flex gap-3 ">
                {
                   categoryList.map(singleCategoryItem => <SIngleCategoryItem key={setCategoryList.id} singleCategoryItem={singleCategoryItem}></SIngleCategoryItem>)
                }
            </div>
        </div>
    );
};

export default CategoryList;