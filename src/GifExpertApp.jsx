import React, {useState} from 'react'
import {GiftGrid, AddCategory} from './components'


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Goku SJJ3'])

    const onAddCategory = (newCategory) => {
        if(categories.includes( newCategory )) return;
        
         setCategories([newCategory, ...categories]);
    }
     
  return (
    <>
    {/* Title */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    <AddCategory 
    // setCategories={ setCategories}
    onNewCategory={ ( value) => onAddCategory(value) }
    />
 
 
    
 { 
                categories.map( ( category ) => (
                    <GiftGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
  
 
    </>
  )
}
