/* import StarEmpty from "../icons/star-empty";
import StarFull from "../icons/star-full"; */

export default function Stars({ number }) {
  /*
  const rows = [];
for (let i = 0; i < numrows; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ObjectRow key={i} />);
}
return <tbody>{rows}</tbody>;

{(() => {
          const options = [];

          for (let i = 2017; i <= 2050; i++) {
            options.push(<option value={i}>{i}</option>);
          }

          return options;
        })()}
        
  return(
     <div className="stars-container">
        {for (let i = 0; i < 5; i++) {
          if (i < Number(number)){
            <StarFull />
          } else {
            <StarEmpty />
          }
        }
    </div>
  )
  */

  if ({ number } === 5) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
      </div>
    );
  } else if ({ number } === 4) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  } else if ({ number } === 3) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  } else if ({ number } === 2) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  } else if ({ number } === 1) {
    return (
      <div className="stars-container">
        <img src=".../assets/star-full.png" alt="Star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
        <img src=".../assets/star-empty.png" alt="Empty star" />
      </div>
    );
  } else if ({ number } === 0) {
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
