import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
];

const coupons = [
  "Free Dinner Date!",
  "Spa Day on Me!",
  "Weekend Getaway!",
  "Movie Night Marathon!",
  "Cooking Class Together!",
  "Outdoor Adventure!",
  "Homemade Dessert Extravaganza!",
  "Tech-Free Day!",
  "Lazy Sunday Cuddles!",
  "Your Choice: _______",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [couponIndex, setCouponIndex] = useState(null);
  const yesButtonSize = noCount * 20 + 16;

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function handleNoClick() {
    setNoCount((prevCount) => prevCount + 1);
  }

  function handleYesClick() {
    setYesPressed(true);
    // Randomly select a coupon index from the array
    const randomIndex = Math.floor(Math.random() * coupons.length);
    setCouponIndex(randomIndex);
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://example.com/bears_kissing.gif"
          />
          <div className="text">Yay!!!!</div>
          {couponIndex !== null && (
            <div className="golden-ticket">
              <div className="ticket-border">
                <div className="coupon-text">{coupons[couponIndex]}</div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://example.com/bear_with_hearts.gif"
          />
          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
