import { useState } from "react"

export const useCountdonw = (date) =>{

    const [day, setDay] = useState()
    const [hours, setHours] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    const counterDonw = () =>{
        const countDate = new Date(date).getTime()
        const now = new Date().getTime()
    
        const interval = countDate - now
    
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24
    
        const dayNumber = Math.floor(interval / day)
        const hourNumber = Math.floor((interval % day) / hour)
        const minuteNumber = Math.floor((interval % hour)/ minute)
        const secondNumber = Math.floor((interval %  minute)/ second)

        setDay(dayNumber)
        setHours(hourNumber)
        setMinute(minuteNumber)
        setSecond(secondNumber)
    }

    setInterval(counterDonw, 1000)



    return [day, hours, minute, second]

}