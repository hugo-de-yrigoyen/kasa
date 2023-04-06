import "../../styles/host.css";

export default function Host({ apartment }) {
  let { name, picture } = apartment.host;

  //Splits first name and last name
  let fullName = name.split(" ");
  
  return (
    <div className="bloc-host">
      <div className="bloc-name">
        <span>{fullName[0]}</span>
        <p>{fullName[1]}</p>
      </div>
      <img src={picture} alt={name} />
    </div>
  );
}
