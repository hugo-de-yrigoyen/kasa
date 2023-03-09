export default function Stars(number) {
  /*
  for (let i = 0; i < { number }; i++) {
    StarFull();
  }
  for (let i = 0; i < 5 - Number({ number }); i++) {
    StarEmpty();
  }
*/
  if (number === 5) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
      </div>
    );
  } else if (number === 4) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  } else if (number === 3) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  } else if (number === 2) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  } else if (number === 1) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  } else if (number === 0) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  }
}
