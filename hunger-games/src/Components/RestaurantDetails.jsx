import { useState, useEffect } from 'react';
import axios from "axios";
import '../Styles/RestaurantDetails.css';

const RestaurantDetails = () => {

    const [details, setDetails] = useState([]); 
    
    useEffect(() => {
        axios.get("http://localhost:2345/get-restaurants").then((res) =>  {
            setDetails(res.data);
        });
    }, []);

    return (
        <div>
            {
                details.map((e) => {
                    return (
                        <div className='border'>
                            <div className='btns'>
                                <div className='page'>
                                    <button>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button>4</button>
                                </div>
                                <div className='rating-filter'>
                                    <button>4 and above</button>
                                    <button>3 and above</button>
                                    <button>2 and above</button>
                                    <button>1 and above</button>
                                </div>
                                <div className='payment-filter'>
                                    <button>Cash</button>
                                    <button></button>
                                </div>
                            </div>
                            <img src={e.img} alt="" />
                            <div className='name-div'>
                                <p className='bold-txt'>{e.name}</p>
                                <p>{e.category}</p>
                                <p>Cost for two: {e.cost_for_two}</p>
                            </div>
                            <div className='rating-div'>
                                <p>Rating: {e.rating}</p>
                                <p>{e.reviews}</p>
                                <p>{e.votes} votes</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default RestaurantDetails;