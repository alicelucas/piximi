import * as React from "react";
import {styles} from "./DeleteImageButton.css";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Delete from "@material-ui/icons/Delete";
import {ConnectedDeleteImageDialog} from "../../DeleteImageDialog";
import {makeStyles} from "@material-ui/styles";
import {useDialog} from "@piximi/hooks";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(styles);

type DeleteImageButtonProps = {
  selectedImages: any;
  setSelectedImages: any;
};

export const DeleteImageButton = (props: DeleteImageButtonProps) => {
  const {t: translation} = useTranslation();

  const {openedDialog, openDialog, closeDialog} = useDialog();

  const classes = useStyles({});

  const {selectedImages, setSelectedImages} = props;

  return (
    // @ts-ignore
    <React.Fragment>
      // @ts-ignore
      <Tooltip title={translation("Delete images")}>
        <IconButton
          aria-label={translation("Delete images")}
          classes={{root: classes.button}}
          onClick={openDialog}
        >
          <Delete classes={{root: classes.icon}} />
        </IconButton>
      </Tooltip>
      // @ts-ignore
      <ConnectedDeleteImageDialog
        setSelectedImages={setSelectedImages}
        selectedImages={selectedImages}
        onClose={closeDialog}
        open={openedDialog}
      />
    </React.Fragment>
  );
};
