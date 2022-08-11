import React from 'react';
import { Header, Categories, Sort, PizzaBlock } from './components';

import './scss/app.scss';

const App = () => {
    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        fetch('https://626d16545267c14d5677d9c2.mockapi.io/items')
            .then(res => res.json())
            .then(setPizzas);
    }, [])

    return (
        <div className="wrapper" >
            <Header />
            <div className="content" >
                <div className="container" >
                    <div className="content__top" >
                        <Categories />
                        <Sort />
                    </div >
                    <h2 className="content__title" > Все пиццы</h2 >
                    <div className="content__items" >
                        {pizzas.length !== 0 && pizzas.map((pizza, index) =>
                            <PizzaBlock key={pizza.id} {...pizza} />
                        )}
                    </div >
                </div >
            </div >
        </div >
    )
}

export default App;