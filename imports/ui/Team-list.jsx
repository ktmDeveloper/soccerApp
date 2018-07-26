import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import fetchTeams from "../api/fetchTeams";
import fetchPlayers from "../api/fetchPlayers";

import PlayerList from "./PlayerList";


export default class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      nameOfLeague: "",
      currentTeamId: null,
      currentTeamName: null,
      currentSquad: [],
      teamLoading: null
    };
    this.showAllTeams = this.showAllTeams.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    let leagueId = this.props.leagueId;
    fetchTeams(leagueId)
      .then(data => {
        console.log(data);
        this.setState({
          teams: data.teams,
          nameOfLeague: data.competition.name
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  showAllTeams() {
    let teams = this.state.teams;
    return teams.map(team => (
      <ListItem key={team.id} button>
        <ListItemText
          primary={team.name}
          onClick={() => this.handleClick(team.id)}
        />
      </ListItem>
    ));
  }
  handleClick(currTeam) {
    this.setState({
      teamLoading: true,
      currentTeamId: null
    });
    fetchPlayers(currTeam)
      .then(data => {
        this.setState({
          teamLoading: false,
          currentTeamId: data.id,
          currentTeamName: data.name,
          currentSquad: data.squad
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  showLoading(currTeam) {
    if (this.state.teamLoading == true) {
      return (
        <CircularProgress
          style={{ margin: "45%", width: "20%", height: "auto" }}
        />
      );
    }
  }

  render() {
    const { teams, nameOfLeague } = this.state;
    return (
      <Grid container>
        <Grid item xs={6}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                {nameOfLeague}
              </Typography>
            </Toolbar>
          </AppBar>
          <List component="div">{this.showAllTeams()}</List>
        </Grid>

        <Grid item xs={6}>
          {this.state.currentTeamId ? (
            <PlayerList
              teamName={this.state.currentTeamName}
              teamId={this.state.currentTeamId}
              squad={this.state.currentSquad}
            />
          ) : (
            this.showLoading()
          )}
        </Grid>
      </Grid>
    );
  }
}
