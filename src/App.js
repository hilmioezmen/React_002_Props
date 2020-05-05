import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Merhaba from './components/Merhaba';
import Button from './components/Button';
import Card from './components/Card';

//import images from assets folder

import resim1 from './assets/user1.jpg';
import resim2 from './assets/user2.jpg';


function App() {
  return (
    <div>
          <Card source={resim1} kisi="Mehmet Yilmaz" text="Web Developer lorem lorem lorem"/>
          <Card source={resim2} kisi="Ayse Yilmaz" text="Yönetici lorem lorem lorem lorem lorem"/>
          <Card source={'/images/userPublic.jpg'} kisi="Ali Kara" text="Asistan lorem lorem lorem lorem lorem"/>


          <Welcome isim="Hasan Yildiz"  yas="35" sehir="Istanbul"/>  
          <Welcome />         
          <hr/>

          <Merhaba isim="Mahmut Tuncer" yas="42" sehir="Adana" />
          <Merhaba />
       
          <hr/>
          <Button text= "Read More" />
          <Button />
        
    </div>
  );
}

export default App;
