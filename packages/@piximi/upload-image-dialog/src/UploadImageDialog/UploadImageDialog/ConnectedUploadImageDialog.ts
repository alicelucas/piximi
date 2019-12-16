import {Project, Image, Partition} from "@piximi/types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {createImage} from "@piximi/store";
import {UploadImageDialog} from "./UploadImageDialog";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.project.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createImage: (checksum: string, data: string, identifier: string) => {
      const payload: Image = {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: checksum,
        data: data,
        identifier: identifier,
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      };

      const action = createImage(payload);

      dispatch(action);
    }
  };
};

export const ConnectedUploadImageDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImageDialog);
