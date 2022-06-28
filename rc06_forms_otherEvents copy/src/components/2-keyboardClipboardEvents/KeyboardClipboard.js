

const KeyboardClipboard = () => {
  const [inputValue,setInputValue] = useState("")
  
  const handleInputChange = () =>{}
  return (
    <div className = 'container text-center'></div>
    <h2>CLIPBOARD EVENTS</h2>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <p lassName='text-start m-4'>{inputValue}</p>
  )
}

export default KeyboardClipboard
