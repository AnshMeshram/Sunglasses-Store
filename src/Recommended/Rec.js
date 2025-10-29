import "./Rec.css";
function Rec({ handleClick }) {
  return (
    <>
      <div className="rec-container">
        <h1 className="recomended-title">Recomended</h1>
        <div className="Recomended-flex">
          <button className="btns" onClick={handleClick} value="">
            All Products
          </button>
          <button className="btns" onClick={handleClick} value="Ray-Ban">
            Ray-Ban
          </button>
          <button className="btns" onClick={handleClick} value="Chanel">
            Chanel
          </button>
          <button className="btns" onClick={handleClick} value="Oakley">
            Oakley
          </button>
          <button className="btns" onClick={handleClick} value="Gucci">
            Gucci
          </button>
          <button className="btns" onClick={handleClick} value="Dior">
            Dior
          </button>
        </div>
      </div>
    </>
  );
}

export default Rec;
