import React from 'react';

const ListItem = ({ item, direction }) => {
    return (
      <div className={`list-item ${direction}`}>
        {item}
      </div>
    );
  };

export default ListItem;
