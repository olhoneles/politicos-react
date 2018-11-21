/*
 * Copyright (c) 2017, Marcelo Jorge Vieira <metal@alucinados.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";
import PropTypes from "prop-types";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";

import Filters from "./views/Filters";
import PoliticiansList from "./views/PoliticiansList";
import defaultReducers from "./defaultReducers";
import HTTPClient from "./HTTPClient";

// FIXME: duplicate
const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#fafafa"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    useNextVariants: true
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);

    const rootReducers = combineReducers({
      ...defaultReducers
    });
    this.store = createStore(rootReducers, applyMiddleware(thunk));

    this.state = {
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Provider store={this.store}>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                >
                  Candidatos políticos brasileiros
                </Typography>
                <Button color="inherit" href="http://politicos.olhoneles.org/">
                  Voltar para o site Politicos API
                </Button>
              </Toolbar>
            </AppBar>
            <nav>
              <Hidden smUp implementation="css">
                <Drawer
                  variant="temporary"
                  anchor="left"
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                  }}
                >
                  <Filters HTTPClient={HTTPClient} />
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  variant="permanent"
                  anchor="right"
                  open
                >
                  <Filters HTTPClient={HTTPClient} />
                </Drawer>
              </Hidden>
            </nav>
            <PoliticiansList HTTPClient={HTTPClient} />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
