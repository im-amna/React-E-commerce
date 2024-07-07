import React from 'react';
const Container = ({children, ClassName}) => {
    return <div className={`w-full px-[10%] ${ClassName}`}>{children}</div> ;
};
 export default Container;