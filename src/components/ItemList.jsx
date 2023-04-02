    import React from 'react';
    import Item from './Item';
  
  function ItemList(props){
  
      return (
        <ul>
          {props.items.map((item) => (
              <Item pokemon={item}/>
          ))}
        </ul>
      );
  
  }
  export default ItemList;
  
  