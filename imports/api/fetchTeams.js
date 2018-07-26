export default function fetchTeams(leagueId){
    return fetch("https://api.football-data.org/v2/competitions/" + leagueId + "/teams", {
        method: "GET",
        headers: new Headers({
          "X-Auth-Token": "019ff06c0a744223a96ef4e7f1912035"
        })
      }).then(res => res.json())
}