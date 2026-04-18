import { useId, useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../app/product-reducer"
import styles from './AddProducts.module.css'

export const AddProducts = () => {
    const inputId = useId()
    const [inputInfo, setInputInfo] = useState("")
    const handleChange = (e) => {
        setInputInfo(e.target.value)
    }
    const dispatcher = useDispatch()
    const handleClick = () => {
        if (inputInfo.trim()) {
            dispatcher(addProduct({title: inputInfo, id: Date.now()}))
            setInputInfo("")
        }
    }
    return (
        <div className={styles.container}>
            <label htmlFor={inputId} className={styles.label}>Add product</label>
            <input 
                onChange={handleChange} 
                value={inputInfo} 
                id={inputId} 
                type="text" 
                placeholder="Enter product"
                className={styles.input}
            />
            <button onClick={handleClick} type="button" className={styles.button}>
                Add
            </button>
        </div>
    )
}