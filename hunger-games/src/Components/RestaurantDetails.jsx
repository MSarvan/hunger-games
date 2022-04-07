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