import {connect} from "react-redux";
import {GalleryItemCategoryMenu} from "./GalleryItemCategoryMenu";
import {updateImageCategoryAction} from "@piximi/store";
import {Dispatch} from "redux";
import {Classifier} from "@piximi/types";

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        identifier: identifier,
        categoryIdentifier: categoryIdentifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedGalleryItemCategoryMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItemCategoryMenu);
