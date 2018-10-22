import React from 'react';
import './list.css';

class List extends React.PureComponent{
    state = {
        sortOrder: "asc"
    }
    render(){
        const { items, component: Component, functionReference, componentProps } = this.props;
        return (
            <ul>
                {items.map((item, index) => (
                    <Component {...componentProps} item={item} index={index} key={index} functionReference={functionReference}/>
                ))}
            </ul>
        );
    }
}

export default List;
