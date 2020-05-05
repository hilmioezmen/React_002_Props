import React,{ Component } from  'react';


class Button extends Component {

        handleClick = (e) => {
        console.log (e);
        console.log (e.target);
        console.log (`${e.target.innerHTML} button clicked`);
                         }
        render () {
// burada button a css özellikleri vermek icin button taginin icerisne direk style ozellikleri yazabiliyoruz. lki tane süslü parantez arasina yazmam gerekiyor ve js formatinda olmasi lazim.

//padding:'10px 20px' => bunun manasi ;asagidan yukaridan 10 px lik bosluk birak, sagdan soldan ise 20 px lik bosluk birak.

//margin:'0 10px' => bunun manasi ise;asagidan yukaridan 0 px lik bosluk birak, sagdan soldan ise 10 px lik bosluk birak

            return (
                <button 
                        onClick = {this.handleClick} 
                style={{padding:'10px 20px', margin:'0 10px'}} > {this.props.text} </button>
            )


        }

}
//default props lar buraya yazilmalidir. 
Button.defaultProps ={text:'I am a button'}

export default Button;
