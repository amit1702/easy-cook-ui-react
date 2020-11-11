import React from "react";
import { connect } from "react-redux";
import RecipeSummary from "../recipe-search/recipe-summary/RecipeSummary";
import classes from "./SelectedRecipeList.module.scss";
import {
  selectRecipe,
  removeRecipeFromSelectedList,
} from "../../../../../redux/actions";
import { getSelectedRecipeList } from "../../../../../redux/selectors";

class SelectedRecipeList extends React.Component {
  render() {
    return (
      <div className={classes.selectedRecipes}>
        {this.props.selectedRecipeList.map((recipe) => (
          <div className={classes.recipeHolder} key={recipe._id}>
            <button
              onClick={() =>
                this.props.removeRecipeFromSelectedList(recipe._id)
              }
            >
              x
            </button>
            <div onClick={() => this.props.selectRecipe(recipe._id)}>
              <RecipeSummary recipe={recipe} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const selectedRecipeList = getSelectedRecipeList(state);
  return {
    selectedRecipeList,
  };
};

export default connect(mapStateToProps, {
  selectRecipe,
  removeRecipeFromSelectedList,
})(SelectedRecipeList);
