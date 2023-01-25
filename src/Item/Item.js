import "./Item.css";

export function Item(props) {
  return (
    <>
      <div className="Tutto">
        <div
          className="Item"
          style={{
            backgroundImage: `url("${props.image}")`,
          }}
        ></div>
        <p className="Testo">{props.name}</p>
      </div>
    </>
  );
}
