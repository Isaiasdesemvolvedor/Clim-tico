import React, { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
import "./App.css";
export default function Home() {

const [search, setsearch] = useState("")
const [apidate, setapidate] = useState("")

const buscado = ()=>{

const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f7c64a67168e66d2eb74c46fcccde7fe`
 fetch(api).then(res=> res.json())
.then(data => setapidate({
nome: data.name,
tempo: data.main.temp,
humidade:data.main.humidity,
vento:data.wind.speed,
}))
}
console.log(apidate)

    return (
      
        <div className="container">
       <header className="header">     
    <h1>Time App</h1>
    <div> 
  
    <input type="text" 
    placeholder="Pesquisar" 
    onChange={(e)=>setsearch(e.target.value)}></input>
    <Button type="primary" onClick={buscado} shape="circle" icon={<SearchOutlined />} />
     </div>
    
     <p>Localidade: {apidate.nome}</p>
     <p>Temperatura: {(apidate.tempo)} °C </p>
     <p>Humidade: {apidate.humidade}%</p>
     <p>Vento: {apidate.vento}km/h</p>
    </header>
    </div>
 

    )
    
}