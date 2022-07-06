import React from "react";
import ProductCategoryRow from "./Component_Row/ProductCategoryRow";
import ProductRow from "./Component_Row/ProductRow";



class ProductTable extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const filter = this.props.filterText
        const rows = [];
        let lastCategory = null;
        const products = this.props.product

        products.forEach(element => {
            
            if (element.name.indexOf(filter) === -1) {
                return;
              }
            if (element.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow category={element.category}
                    key={element.category} 
                    />
                );
            }
            rows.push(
                <ProductRow product = {element}
                key = {element.name} 
                />
            )
            lastCategory = element.category

        });

        return (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          );
        }
      


    }



export default ProductTable;