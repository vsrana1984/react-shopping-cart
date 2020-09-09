import { FETCH_PRODUCTS, FILTER_PRODUCT_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";

export const fetchProducts = () => async (dispatch) => {
  //console.log('Somthing');
  const res = await fetch("/api/products");
  const data = await res.json();
  //console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

//filter products by size
export const filterProducts = (products, size) => (dispatch) => {
 
  dispatch({
    type: FILTER_PRODUCT_BY_SIZE,
    payload:{
      size: size,
      items: size === " "
      ?products
      :products.filter(product => product.availableSizes.indexOf(size) >= 0),
    },
  });

};

//Sort products by price
export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts
                            .slice()
                            .sort((a,b)=> 
                                sort === "lowest"
                                  ? a.price > b.price
                                    ? 1 
                                    :-1
                                  : sort === "highest"
                                    ? a.price < b.price
                                    ? 1 
                                    :-1
                                  :a._id < b._id
                                    ? 1 
                                    :-1
                            
                          );
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};