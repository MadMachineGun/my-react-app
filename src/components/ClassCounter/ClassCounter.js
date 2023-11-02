import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    render() {
        return (
            <>
                <div>{}
                    Counter
                </div>
            </>
        );
    }
}

export default ClassCounter;
