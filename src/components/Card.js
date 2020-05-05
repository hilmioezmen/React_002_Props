import React, {Component} from 'react';

class Card extends Component {

    render () {

        return (
            <div style ={{width:'200px', height:'300px', border:'1px solid black', padding:'10px', margin:'20px', display: 'inline-block'  }} >
                <img style={imgStyle} src={this.props.source} alt="person"/>
                <h2 style= {h2Style} > {this.props.kisi} </h2>
                <p>{this.props.text} </p>

            </div>
        )
    } 

}

const imgStyle ={
     width:'150px',
     height:'150px',
     margin: '10px 25px',
     backgroundColor: 'grey',
}


const h2Style = {
    textAling :'center',
    color :'blue',
}



export default Card;