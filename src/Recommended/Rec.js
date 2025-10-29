import "./Rec.css";
function Rec({ handleClick }) {
  return (
    <>
      <div className="rec-container">
        <div className="rec-header">
          <h2 className="recommended-title">Recommended Brands</h2>
          <p className="recommended-subtitle">Filter by brand to find your perfect style</p>
        </div>
        <div className="recomended-flex">
          <button className="btns" onClick={handleClick} value="">
            <span className="btn-text">All Products</span>
          </button>
          <button className="btns" onClick={handleClick} value="Ray-Ban">
            <span className="btn-text">Ray-Ban</span>
          </button>
          <button className="btns" onClick={handleClick} value="Chanel">
            <span className="btn-text">Chanel</span>
          </button>
          <button className="btns" onClick={handleClick} value="Oakley">
            <span className="btn-text">Oakley</span>
          </button>
          <button className="btns" onClick={handleClick} value="Gucci">
            <span className="btn-text">Gucci</span>
          </button>
          <button className="btns" onClick={handleClick} value="Dior">
            <span className="btn-text">Dior</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Rec;
