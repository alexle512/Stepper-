import React from "react";

class Submit extends React.Component {

    render(){
        const {isActive} = this.props;
        if (isActive === false) return null;

        return (
            <button type = "submit">
            Submit
            </button>
        )
    }
}

export {Submit};