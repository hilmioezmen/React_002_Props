import React from 'react'

//this ifadesini function comp. larin icersinde kullanamiyoruz. o yuzden props ifadesini fonksiyon adinin yanindaki parantezin icerisine yaziyoruz.
// function Merhaba(props) {
//     console.log(props); 
//     return (
//         <div>
//                 <h3>{props.isim}</h3>
//                 <h1> {props.yas} </h1>
//                 <p> {props.sehir} </p>
//         </div>  
//           )
// }

// //default props lar buraya yazilmalidir. 
// Merhaba.defaultProps ={isim:'Hasan', yas:'18', sehir:'Antalya' }

// export default Merhaba;


// Destructuring 1. Yöntem
// function Merhaba({isim, yas, sehir}) {
    
//     return (
//         <div>
//                 <h3>{isim}</h3>
//                 <h1> {yas} </h1>
//                 <p> {sehir} </p>
//     	</div>  
//     )
// }

// //default props lar buraya yazilmalidir. 
// Merhaba.defaultProps ={isim:'Hasan', yas:'18', sehir:'Antalya' }

// export default Merhaba;



// Destructuring 2. Yöntem
function Merhaba(props) {
    
    const {isim, yas, sehir} = props;

    return (
        <div>
                <h3>{isim}</h3>
                <h1> {yas} </h1>
                <p> {sehir} </p>
    	</div>  
    )
}

//default props lar buraya yazilmalidir. 
Merhaba.defaultProps ={isim:'Hasan', yas:'18', sehir:'Antalya' }

export default Merhaba;
