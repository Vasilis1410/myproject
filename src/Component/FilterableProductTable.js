import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import ProductTable from "./ProductTable";
import Search from "./Search";






class FilterableProductTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: ""
        }
    }

    OnHandleText = (e) =>{
        this.setState({
            value:e
        });

    }

    render(){
        return(
            <>
                <div>
                    <Search
                       OnHandleText={this.OnHandleText}
                       value={this.state.value} />
                </div>
                <div>
                    <ProductTable 
                        product = {this.props.product}
                        filterText = {this.state.filterText}/>
                </div>
            </>
        );
    }
}
export default FilterableProductTable;