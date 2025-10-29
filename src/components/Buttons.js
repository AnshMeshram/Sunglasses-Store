
function buttons(handleClick) {
  return (
    <div>
    <h2 className="recomendedtitle">Recommended</h2>
    <div className="Recommended-flex">
      <Buttons onClickHandler={handleClick}
      value=''
      title='All'/>
       <Buttons onClickHandler={handleClick}
      value=''
      title='Ray-Ban'/>
       <Buttons onClickHandler={handleClick}
      value=''
      title='Chanel'/>
       <Buttons onClickHandler={handleClick}
      value=''
      title='Oakley'/>
       <Buttons onClickHandler={handleClick}
      value=''
      title='Gucci'/>
       <Buttons onClickHandler={handleClick}
      value=''
      title='Dior'/>
      </div>
      </div>
  )
}

export default buttons