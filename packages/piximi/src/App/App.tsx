import * as React from "react";
import {createMuiTheme} from "@material-ui/core/styles";
import {makeStyles, ThemeProvider} from "@material-ui/styles";
import HTML5Backend from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {styles} from "./App.css";
import {useDialog, useDrawer} from "@piximi/hooks";
import {NavigationDrawer} from "@piximi/navigation-drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import {ConnectedGalleryDialog} from "@piximi/gallery-dialog";
import {useEffect} from "react";

const theme = createMuiTheme();

const useStyles = makeStyles(styles);

export const App = () => {
  const {closeDialog, openDialog, openedDialog} = useDialog();

  const {openedDrawer, toggleDrawer} = useDrawer();

  const classes = useStyles({});

  useEffect(() => {
    openDialog();
  });

  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar)}>
            <Toolbar>
              <Typography className={classes.typography} variant="h6">
                Piximi
              </Typography>
            </Toolbar>
          </AppBar>

          <NavigationDrawer toggled={openedDrawer} toggle={toggleDrawer} />

          <ConnectedGalleryDialog
            onClose={closeDialog}
            open={openedDialog}
            openedDrawer={openedDrawer}
            toggleDrawer={toggleDrawer}
          />
        </div>
      </DndProvider>
    </ThemeProvider>
  );
};