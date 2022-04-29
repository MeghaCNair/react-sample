import React from "react";

const AppWrapper = (props) =>{
    const wrapperStyles = {border:"1px solid black",padding:"25px"};
    return <div style={wrapperStyles}>{props.children}</div>
}

export default AppWrapper;
