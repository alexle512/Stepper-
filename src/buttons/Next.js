import React from "react";

class Next extends React.Component{

    render(){
        const { isActive } = this.props;
        if (isActive === false) return null;

        return (
            <button onClick={() => this.props.goToNextStep()}>
            Next
            </button>
        )
    }
}

export {Next};