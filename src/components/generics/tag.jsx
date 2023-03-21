export default function Tags({ tags }) {
  return (
    <div className="tagsContainer">
      {tags.map((tag) => {
        return <span className="tag">{tag}</span>;
      })}
    </div>
  );
}
