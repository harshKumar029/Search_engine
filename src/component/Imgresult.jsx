import React from 'react'

export const Imgresult = (props) => {
  const data=props.items;
  console.log("imgdata",props);
  return (
    <>
        {/* <h1 style={{color:'red'}}>img</h1> */}
    <div className="img-container">
      {data && data.map((item) => (
        <div className="img-item" key={item.link}>
          <a href={item.contextLink} target="_blank">
            <img src={item.thumbnailImageUrl} alt='img'/>
            <h4>{item.title.split(' ').slice(0, 5).join(' ')} ...</h4></a>
        </div>
      ))}
    </div>
    </>
  )
}


// contextLink
// : 
// "https://www.cnn.com/2022/12/19/football/argentina-france-best-world-cup-final-spt-intl/index.html"
// height
// : 
// 852
// originalImageUrl
// : 
// "https://media.cnn.com/api/v1/images/stellar/prod/221219105607-messi-crowd-world-cup-121822.jpg?c=original&q=w_1280,c_fill"
// size
// : 
// "221KB"
// thumbnailImageUrl
// : 
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GMNVBWTSSYEtU6PipINZMz4_IJJAjKs5Qlr2triD7I4FxUwN&s"
// title
// : 
// "Why Argentina's win over France was the greatest World Cup final ..."
// width
// : 
// 1280