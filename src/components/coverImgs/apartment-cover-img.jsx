import "../../styles/apartment-cover-img.css";

export default function ApartmentCoverImg({ apartment }) {
  return (
    <div className="cover-img">
      <img src={apartment.cover} alt="Cover" />
    </div>
  );
}
