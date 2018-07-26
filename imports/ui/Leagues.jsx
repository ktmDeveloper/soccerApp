import React from 'react';
import Grid from "@material-ui/core/Grid";

export default class Leagues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover : false
        }
        this.toggleHover = this.toggleHover.bind(this);
    }
    
  toggleHover(){
    this.setState({hover: !this.state.hover})
  }
  render () {

    let {leagueId, name} = this.props;
    let style;

      if (this.state.hover) {
        style = {
            backgroundImage: "url("+leagueId+".jpg)",
            backgroundSize: 'cover',
            minHeight: 160,
            opacity: 1,
            cursor: 'pointer',
            transform: 'scale(1.05)'
            }
      } else {
        style = {
            backgroundImage: "url("+leagueId+".jpg)",
            backgroundSize: 'cover',
            minHeight: 160,
            opacity: 0.75,
            transition: 'all 1s ease-in-out'
            }
      }

    return (
        <Grid item xs={6} md={4}>
            <div  style={style} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick = {this.props.onClick} >
            </div>
        </Grid>
    )
  }
}
