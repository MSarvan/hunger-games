import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/RestaurantDetails.css";

const RestaurantDetails = () => {
  const [details, setDetails] = useState([]);
  const [toshow, setToshow] = useState([]);
  console.log("toshow:", toshow);

  useEffect(() => {
    axios.get("http://localhost:2345/get-restaurants").then((res) => {
      setDetails(res.data);
      setToshow(res.data);
    });
  }, []);

  function handleRating(a) {
    if (a == 4) {
      let temp = toshow.filter((items) => {
        if (items.rating >= 4) {
          return items;
        }
      });
      setToshow(temp);
    }

    if (a == 3) {
      let temp = toshow.filter((items) => {
        if (items.rating >= 3) {
          return items;
        }
      });
      setToshow(temp);
    }

    if (a == 2) {
      let temp = toshow.filter((items) => {
        if (items.rating >= 2) {
          return items;
        }
      });
      setToshow(temp);
    }

    if (a == 1) {
        let temp = toshow.filter((items) => {
          if (items.rating >= 1) {
            return items;
          }
        });
        setToshow(temp);
      }
  }

  const costSorting = (val) => {
    if (val == 0) {
      // low to high
      let temp = [...toshow];
      temp.sort((a, b) => a.cost_for_two - b.cost_for_two);
      setToshow(temp);
      //console.log('temp:', temp);
    }
  }

  const paymentFilter = (inp) => {
      if(inp == "cash")
      {
        let temp = toshow.filter((items) => {
             if (items.payment_method.cash) {
                 return items;
               }
            });
      }

      if(inp == "card")
      {
        let temp = toshow.filter((items) => {
            if (items.payment_method.card) {
              return items;
            }
        });
      }
  }

  return (
    <div>
      <div className="btns">
        <div className="page">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
        <div className="rating-filter">
          <button onClick={() => handleRating(4)}>4 and above</button>
          <button onClick={() => handleRating(3)}>3 and above</button>
          <button onClick={() => handleRating(2)}>2 and above</button>
          <button onClick={() => handleRating(1)}>1 and above</button>
        </div>
        <div className="payment-filter">
          <button onClick={() => paymentFilter(cash)}>Cash</button>
          <button onClick={() => paymentFilter(card)}>Card</button>
          <button onClick={() => paymentFilter(all)}>All</button>
        </div>
        <div className="cost-filter">
          <button onClick={() => costSorting(0)}>Cost - Low to High</button>
          <button onClick={() => costSorting(1)}>Cost - High to Low</button>
        </div>
      </div>

      {toshow.map((e) => {
        return (
          <div className="border">
            <img src={e.img} alt="" />
            <div className="name-div">
              <p className="bold-txt">{e.name}</p>
              <p>{e.category}</p>
              <p>Cost for two: {e.cost_for_two}</p>
            </div>
            <div className="rating-div">
              <p>Rating: {e.rating}</p>
              <p>{e.reviews}</p>
              <p>{e.votes} votes</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetails;
