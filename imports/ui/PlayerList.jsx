import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default class PlayerList extends Component {
  state = {
    open: false,
    playerDialogue: [
      {
        name: null,
        position: null,
        countryOfBirth: null
      }
    ]
  };

  handleClickOpen = (id) => {
    this.setState({
      open: true,
      playerDialogue: this.props.squad.filter(player => player.id == id)
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  checkIfOpen(dialogId) {
    if (dialogId == this.state.openId) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    this.setState({
      open: false,
      playerDialogue: [
        {
          name: null,
          position: null,
          countryOfBirth: null
        }
      ]
     });
  }
  render() {
    const { squad, teamName } = this.props;

    return (
      <List component="div">
        <ListItem>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                {teamName}
              </Typography>
            </Toolbar>
          </AppBar>
        </ListItem>
        {squad.map(player => (
          <ListItem key={player.id} onClick={() => this.handleClickOpen(player.id)} button>
            <ListItemText primary={player.name} />
            <ListItemText secondary={player.position} />
          </ListItem>
        ))}

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Player Profile</DialogTitle>
          <DialogContent>
            <Card>
              <CardContent>
                <Typography color="textSecondary" variant="headline">
                  {this.state.playerDialogue[0].name}
                </Typography>
                <Typography variant="subheading">
                  {this.state.playerDialogue[0].position}
                </Typography>
                <Typography color="textSecondary">
                  Country of Origin: {this.state.playerDialogue[0].countryOfBirth}
                </Typography>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close Modal
                </Button>
          </DialogActions>
        </Dialog>

      </List>
    );
  }
}

