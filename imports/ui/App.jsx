import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import TeamList from "./Team-list";
import Leagues from "./Leagues";

const theme = createMuiTheme({});

export default class App extends Component {
  constructor(props) {
    super(props);
    //set state

    this.state = {
      competitions: new Map([
        [ 2001, 'Champions league'],
        [ 2002, 'Bundesliga'],
        [ 2014, 'La Liga'],
        [ 2015, 'Ligue 1'],
        [ 2019, 'Serie A'],
        [ 2021, 'Premier League'],
      ]),
      players: [],
      view: 'leagues',
      currentLeague: ''
    };
    this.handleLeagueClick = this.handleLeagueClick.bind(this)
    this.mainView = this.mainView.bind(this)
    this.renderLeagues = this.renderLeagues.bind(this)
    this.renderTeams = this.renderTeams.bind(this)
  }

  componentWillMount() {
    this.setState({
      players: this.getPlayers()
    });
  }

  //https://codesandbox.io/s/5kkx2vv0yl
  getPlayers() {
    return [
      {
        _id: 0,
        name: "Messi",
        goals: 22,
        Offense: 8,
        Defense: 5
      },
      {
        _id: 1,
        name: "Suarez",
        goals: 25,
        Offense: 8,
        Defense: 6.5
      },
      {
        _id: 2,
        name: "Rakitic",
        goals: 12,
        Offense: 8,
        Defense: 4.5
      }
    ];
  }
  handleLeagueClick(leagueId){
    
        this.setState({view:'teams', currentLeague: leagueId})
  }
  renderPlayers() {
    return this.state.players.map(player => (
      <TeamList key={player._id} player={player} />
    ));
  }
  renderLeagues() {
      let allLeagues = []
    this.state.competitions.forEach((val, key) => (
        allLeagues.push(
            <Leagues key={key} leagueId = {key} name={val}  onClick = {() => this.handleLeagueClick(key)}/>
        )
    ));
    return allLeagues;
  }

  renderTeams() {
        return (
           < TeamList leagueId={this.state.currentLeague} />
        )
}

  mainView(){
      let view = this.state.view;
      switch (view){
          case 'leagues':
            return this.renderLeagues()
          case 'teams':
           return  this.renderTeams()   
          default:
            return this.renderLeagues()
      }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="container">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                <a href="/" style={{color: 'white'}}>Explore Soccer ! </a>
              </Typography>

              <Typography variant="subheading" color="inherit" style={{margin: '0 0 0 auto'}}>
                <a href="/contactMe" style={{color: 'white'}}>Contact Me </a>
              </Typography>

            </Toolbar>
            
          </AppBar>

          <Grid container spacing={24} style={{ marginTop: 12}}>
           { this.mainView()}
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
