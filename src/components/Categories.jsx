import React from 'react';

const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className="categories" >
            <ul>
                {pizzaCategories.map((category, index) =>
                    <li key={category} onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>{category}</li>
                )}
            </ul >
        </div >
    )
}

export default Categories;