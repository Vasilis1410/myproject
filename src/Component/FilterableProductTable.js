import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import ProductTable from "./ProductTable";
import Search from "./Search";






class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            OnStock: false
        };
    }

    OnHandleText = (value) => {
        this.setState({
            value: value
        });

    }

    OnHandleStock = (OnStock) => {
        this.setState({
            OnStock: OnStock
        })
    }

    render() {
        return (
            <>
                <div>
                    <Search
                        OnHandleText={this.OnHandleText}
                        value={this.state.value}
                        OnStock={this.state.OnStock}
                        OnHandleStock={this.OnHandleStock} />
                </div>
                <div>
                    <ProductTable
                        product={this.props.product}
                        filterText={this.state.value}
                        InStock = {this.state.OnStock} />
                </div>
            </>
        );
    }
}
export default FilterableProductTable;