// pages/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_TYPE } from "../Redux/Cart_Reducer/action.jsx";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.salary * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{ width: "80px", borderRadius: "8px" }}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>Salary: ₹{item.salary}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={() =>
                    dispatch({ type: ACTION_TYPE.DECREASE_QTY, payload: item.id })
                  }
                  style={{
                    background: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({ type: ACTION_TYPE.INCREASE_QTY, payload: item.id })
                  }
                  style={{
                    background: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() =>
                  dispatch({ type: ACTION_TYPE.REMOVE_FROM_CART, payload: item.id })
                }
                style={{
                  background: "#ff9800",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </div>
      )}
    </div>
  );
}

export default CartPage;
