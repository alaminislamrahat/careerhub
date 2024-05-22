

const SIngleCategoryItem = ({ singleCategoryItem }) => {
    const { id,logo,category_name,availability } = singleCategoryItem;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
                
            </div>
        </div>
    );
};

export default SIngleCategoryItem;