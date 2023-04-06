import "../../styles/tags.css";

export default function Tags({ apartment }) {
  let { tags } = apartment;
  return (
    <div className="bloc-tags">
      {tags.map((tag) => {
        return (
          <span className="tag" key={tag}>
            {tag}
          </span>
        );
      })}
    </div>
  );
}
