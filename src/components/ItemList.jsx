    import React from 'react';
    import Item from './Item';
  
  function ItemList(props){
  
      return (
        <ul>
          {props.items.map((item,index) => (
              <Item key={index} pokemon={item}/>
          ))}
        </ul>
      );
  
  }
  export default ItemList;
  
  