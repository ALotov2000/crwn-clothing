import CategoryItem from "../category-item/category-item.component";

export default function CategoryList({ categories }) {

    return (
        <div className="category-list-container">
            {categories.map((category) => {
                return (
                    <CategoryItem key={category.id} category={category} />
                );
            })}
        </div>
    );
}
