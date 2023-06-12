import { useEffect,useState,useRef } from "react"
function useWordGame()
{
    const [text,setText]=useState("")
    const [timeRemaining,setTimeRemaining]=useState(0)
    const [wordsCount,setWordsCount]=useState(0)
    const inputRef=useRef(null)
    useEffect(()=>{
      let timerID
     if(timeRemaining>0)
     {
      timerID= setTimeout(()=>{
        setTimeRemaining(prevTime=>prevTime-1 )
        },1000)
     }
     else if(timeRemaining ===0)
     {
       setWordsCount(
        calcWordCount(text)
       )
     }
    return ()=>{
      clearTimeout(timerID)
    }
    }
    ,[timeRemaining])
    function handleChange(event)
    {
     
       const {value}=event.target
      setText(value)
      
      
    }
    function startGame()
    {
     
      setText("")
      setTimeRemaining(30)
      setWordsCount(0)
      inputRef.current.disabled=false
      inputRef.current.focus()
      
   
    }
    function calcWordCount(text)
    {
     
      const split_string = text.trim().split(" ");
      return split_string.filter(word => word !== "").length
  
    }
    return [text,handleChange,inputRef,timeRemaining,startGame,wordsCount]
}
export default useWordGame