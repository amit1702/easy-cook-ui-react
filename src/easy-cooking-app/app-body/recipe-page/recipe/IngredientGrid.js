import React from "react";
import { AgGridReact } from "ag-grid-react";
import { constants } from "../../../../utils/Constants";
import {
  getGridColumns,
  getGridHeight,
} from "../../../../utils/layoutCalculations";

export default class IngredientGrid extends React.Component {
  render() {
    let gridHeight = getGridHeight(this.props.recipe);
    let gridStyle = {
      height: gridHeight,
      width: 400,
    };
    let gridColumns = getGridColumns(500);
    return (
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          rowData={this.props.recipe.ingredients}
          rowSelection="multiple"
          rowHeight={constants.gridRowHeight}
          columnDefs={gridColumns}
        ></AgGridReact>
      </div>
    );
  }
}
