import React from 'react'

export const Result = (props) => {
  const data=props.items
  console.log("i am in a result section",data);
  return (
    <>
    {/* <div>
    <h1 style={{color:'red'}}>tital is</h1>
    {data && data.map((item) => (
      <>
              <h1>{(new URL(item.link)).hostname.replace('www.', '')}</h1>
             <h1>{(new URL(item.link)).hostname.replace(/^www\./, '').split('.')[0]}</h1>
        <a href={item.link} target="_blank">
             <h4>{(new URL(item.link)).hostname.replace('www.', '')}</h4>
        <h2 style={{ color: 'rgb(10, 136, 253)' }} >{item.title}</h2>
        <p style={{ color: '#626262' }}>{(new URL(item.link)).origin}</p>
        </a>
        <p style={{ color: '#000000' }}>{item.snippet}</p>
            <h1>{(new URL(item.link)).hostname.replace('www.', '')}</h1>
        </>
      ))}
    </div> */}
        <div className="result-container">
    {/* <h1 style={{color:'red'}}>tital is</h1> */}
      {data && data.map((item) => (
        <div className="result-item" key={item.link}>
          <a href={item.link} target="_blank">
            <h2>{item.title}</h2></a>
            <p className='links'>{(new URL(item.link)).origin}</p>
            <p className='links-snippet'>{item.snippet}</p>
        </div>
      ))}
    </div>
    </>
  )
}

// "items": [
//   {
//     "title": "FIFA World Cup 26™",
//     "htmlTitle": "FIFA World Cup 26™",
//     "link": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026",
//     "displayLink": "www.fifa.com",
//     "snippet": "The FIFA World Cup 26™ will be 23rd edition of the tournament but the first to feature 48 teams and three host countries: Canada, Mexico and the United ...",
//     "htmlSnippet": "The FIFA World Cup 26™ will be 23rd edition of the tournament but the first to feature 48 teams and three host countries: Canada, Mexico and the United ..."
//   },