import { useState } from "react"
import { useSelector } from "react-redux"
import { AddProducts } from "../components/addProduct/AddProducts"
import styles from './Homepage.module.css'

export const Homepage = () => {
    const productList = useSelector((state) => state.products.productList)
    const [filterText, setFilterText] = useState("")
    
    const filteredProducts = productList.filter(product => 
        product.title.toLowerCase().includes(filterText.toLowerCase())
    )
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Products</h1>
            <AddProducts/>
            
            <div className={styles.filterSection}>
                <label className={styles.filterLabel}>Filter field</label>
                <input 
                    className={styles.filterInput}
                    type="text" 
                    placeholder="Enter product name"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
            </div>
            
            <div>
                {filteredProducts.length === 0 ? (
                    <div className={styles.emptyMessage}>No products found</div>
                ) : (
                    <ul className={styles.list}>
                        {filteredProducts.map((product) => (
                            <li className={styles.item} key={product.id}>
                                {product.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}