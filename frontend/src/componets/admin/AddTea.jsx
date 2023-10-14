import API from "../../API/API";
import {useState} from "react";

const AddTea = ({reset}) => {
    const [select, setSelect] = useState(null)
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(null)
    const [amount, setAmount] = useState(null)
    const [isAvailable, setIsAvailable] = useState(null)
    const [category, setCategory] = useState(null)
    const HandleChange = (e) => {
        setSelect(e.target.files[0])
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleDesc = (e) => {
        setDesc(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    const handleAva = (e) => {
        setIsAvailable(e.target.value)
    }
    const handleCategor = (e) => {
        setCategory(e.target.value)
    }
    const AddTea = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("imagePath", select)
        formData.append("name", name)
        formData.append("description", desc)
        formData.append("price", price)
        formData.append("isAvailable", isAvailable)
        formData.append("amount", amount)
        formData.append("categoryId", category)
        await API.post("/tea", formData)
        reset()
    }
   return (
       <div className="addTea">
           <form onSubmit={AddTea}>
               <p>Name</p>
               <input type="text" onChange={handleName}/>
               <p>Desc</p>
               <input type="text" onChange={handleDesc}/>
               <p>Price</p>
               <input type="text" onChange={handlePrice}/>
               <p>Amount</p>
               <input type="text" onChange={handleAmount}/>
               <p>Category</p>
               <input type="text" onChange={handleCategor}/>
               <p>isAvailable</p>
               <input type="text" onChange={handleAva}/>
               <p>image</p>
               <input type="file" onChange={HandleChange}/>
               <button type="submit">Добавить</button>
           </form>
       </div>
   )

};

export default AddTea;