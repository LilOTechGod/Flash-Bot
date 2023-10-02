import { createContext, useState } from "react";
// service array of products
import { service, getProductData } from "../components/ServicePage";

// Context is going to hold cart, add to cart, remove cart
// Provider, gives your react app access to all the things in your context
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});


export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    // [{id: 1, quantity: 2}, {id: 2, quantity: 1}]
    // let's say I pass in 1 as the id => iterate through cartProducts, find the product where the product is equal to the id we passed in, if so the object associated with that id will be returned, we then fetch the quantity property. 
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id ===id)?.quantity

        // if quantity is undefined return 0 if not return the quantity
        if(quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    // fetches the current quantity for that product and then adds one to it
    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 0) {    // product is not in cart
            setCartProducts(
                [
                    // take all of the objects that are already in our cart and put them to the front of this array then on top of all the objects that are already in our cart we want to add another one which is going to have an ID of the ID we passed in here b/c that's the item we're adding to the cart, with an initial quantity of 1.
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else {     //product is in cart
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? {...product, quantity: product.quantity + 1} : product
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        }else {
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? {...product, quantity: product.quantity - 1} : product
                )
            )
        }
    }


    function deleteFromCart(id) {
        // filter creates a new array and I'm saying to return the new array where the object that has the id I entered don't appear in the new array.
        setCartProducts(
            cartProducts => cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0;

        cartProducts.map(cartItem => {
            // fetch the data within the object the matched the id provided
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        })
        return totalCost;
    }

    const contextValue = {
        // all of the services in my service page is saved as items which is equal to the state of cartProducts which is an empty array until i set cart products. 
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

