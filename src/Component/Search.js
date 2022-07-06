import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props)

    }

    handleChange = (e)=>{
        this.props.OnHandleText(e.target.value)
    }
    

    render() {
        return (
            <form>
                    <input 
                        type="text"
                        value={this.props.values}
                    ></input>
                    <p>
                        <input type="checkbox" />
                        {' '}
                        Only show products in stock
                    </p>

            </form>
        )
    }

}
export default Search;