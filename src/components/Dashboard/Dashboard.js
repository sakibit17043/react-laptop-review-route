import React, { useEffect, useState } from 'react';
import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar,AreaChart,Area } from 'recharts'; 

const Dashboard = () => {
    const [chart,setChart] = useState([]);
    useEffect(()=>{
        fetch('chart.json')
        .then(res=>res.json())
        .then(data=> setChart(data))
    },[])
    return (
        <div>
            <BarChart width={730} height={250} data={chart}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>


{/* area chart  */}
<AreaChart width={730} height={250} data={chart}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
         
        </div>
    );
};

export default Dashboard;