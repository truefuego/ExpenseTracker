import React from 'react'
import expensesStore from '../stores/expensesStore'
import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts'

const LastWeekStatistics = () => {
    const { expenses } = expensesStore()
    const today = new Date()
    const startDate = new Date(today)
    startDate.setDate(today.getDate() - 6)
    // const expenses = [
    //     {
    //         date: "18-7-2023",
    //         amount: -500
    //     },
    //     {
    //         date: "18-7-2023",
    //         amount: 60
    //     },
    //     {
    //         date: "18-7-2023",
    //         amount: -40
    //     },
    //     {
    //         date: "19-7-2023",
    //         amount: 790
    //     },
    //     {
    //         date: "19-7-2023",
    //         amount: 61
    //     },
    //     {
    //         date: "19-7-2023",
    //         amount: -82
    //     },
    //     {
    //         date: "20-7-2023",
    //         amount: -560
    //     },
    //     {
    //         date: "20-7-2023",
    //         amount: 782
    //     },
    //     {
    //         date: "21-7-2023",
    //         amount: 865
    //     },
    //     {
    //         date: "21-7-2023",
    //         amount: -18
    //     },
    //     {
    //         date: "21-7-2023",
    //         amount: 35
    //     },
    //     {
    //         date: "21-7-2023",
    //         amount: 95
    //     },
    //     {
    //         date: "22-7-2023",
    //         amount: 356
    //     },
    //     {
    //         date: "22-7-2023",
    //         amount: -35
    //     },
    //     {
    //         date: "23-7-2023",
    //         amount: -5
    //     },
    //     {
    //         date: "23-7-2023",
    //         amount: 365
    //     },
    //     {
    //         date: "24-7-2023",
    //         amount: 843
    //     },
    //     {
    //         date: "24-7-2023",
    //         amount: 896
    //     },
    //     {
    //         date: "25-7-2023",
    //         amount: -98
    //     },
    //     {
    //         date: "25-7-2023",
    //         amount: 564
    //     },
    // ]
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    let data = []

    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i); // Increment the date for each object
        
        const date1 = date.getDate()
        const month = (date.getMonth()+1)
        const year = date.getFullYear()
        const day = date.getDay()
        
        data.push({
            date: date1+'-'+month+'-'+year,
            day: daysOfWeek[day],
            gain: 0,
            loss: 0,
        });
    }

    for(let i = 0 ; i < 7 ; i++) {
        const temp = expenses.filter((expense) => {
            return expense.date === data[i].date
        })
        temp.forEach((item) => {
            if(item.amount > 0) {
                data[i].gain += item.amount
            }
            if(item.amount < 0) {
                data[i].loss -= item.amount
            }
        })
        console.log(
            temp
        )
    }

    console.log(data)

  return (
    <AreaChart width={370} height={220} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f0" stopOpacity={0.5}/>
                <stop offset="100%" stopColor="#0f0" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f00" stopOpacity={0.5}/>
                <stop offset="100%" stopColor="#f00" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="day"/>
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="gain" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="loss" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
    )
}

export default LastWeekStatistics