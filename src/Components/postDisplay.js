import React, { useEffect, useState } from "react";

// import {postFetching, postFetchSuccess, postFetchError} from "../redux/actions/postActions";
import { fetchingData } from "../redux/action/postAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const PostDisplay = () => {

    const[cartItem, setCartItem] = useState([])
    
    const { data } = useSelector((state) => state);
    // console.log("data>>>>>", data.products);

    const dispatch = useDispatch();
    // console.log(loading, data, error);

    useEffect(
        () => {
            dispatch(fetchingData())
           
        }, []
    )

    let product= []

    function addToCart(item) {
        console.log(item);
        product.push(item)
        localStorage.setItem("dataKeys", JSON.stringify(product))

        // console.log(e.target.value);
        
    }

    return (
        <div className="display">
            {
                data.products?.map((item, index) => {
                    return (

                        <div key={item.id} className="card">
                            <img style={{ borderRadius: "10px" }} src={item.images[0]} width={230} height={200} />
                            <hr />
                            <p style={{ fontSize: "18px" }}>Titile :-{item.title.slice(0, 14)}</p>
                            <p style={{ fontSize: "18px" }}>Price :-$ {item.price}</p>
                          
                                <div className="button">
                                    <button className="btn" 
                                    onClick={()=>addToCart(item)}>ADD TO CART</button>
                                </div>
                          
                        </div>


                    )
                })
            }
          
        </div >
    );
}

export default PostDisplay;