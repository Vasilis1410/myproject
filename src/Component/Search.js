import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props)

    }

    handleChangeText = (e)=>{
        this.props.OnHandleText(e.target.value)
    }


    handleChangeStock = (e)=>{
        this.props.OnHandleStock(e.target.checked)
    }




    

    render() {
        return (
            <form>
                    <input 
                        type="text"
                        value={this.props.value}
                        onChange={this.handleChangeText}
                    ></input>
                    <p>
                        <input
                            type="checkbox"
                            checked={this.props.OnStock}
                            onChange={this.handleChangeStock}
                        />
                        {' '}
                        Only show products in stock
                    </p>

            </form>
        )
    }

}
export default Search;