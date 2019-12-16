import * as React from "react";
import {storiesOf} from "@storybook/react";
import {FitOptionsForm} from "./FitOptionsForm";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import {Provider} from "react-redux";
import {reducer} from "@piximi/store";
import {createStore} from "redux";

const store = createStore(reducer);

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

storiesOf("FitOptionsForm", module).add("example", () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FitOptionsForm />
      </ThemeProvider>
    </Provider>
  );
});
