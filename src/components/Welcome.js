import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        console.log(this.props); 

        // Destructuring yöntemi:

        const {isim, yas, sehir} = this.props;


        return (
            <div>
                <h3>{isim}</h3>
                <h1> {yas} </h1>
                <p> {sehir} </p>
            </div> 
        );
    }
}

//default props lar buraya yazilmalidir. 
Welcome.defaultProps ={isim:'Hasan', yas:'18', sehir:'Antalya' }

export default Welcome;