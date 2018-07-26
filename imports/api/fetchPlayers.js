export default function fetchTeams(teamId){
    return fetch("https://api.football-data.org/v2/teams/" + teamId, {
        method: "GET",
        headers: new Headers({
          "X-Auth-Token": "019ff06c0a744223a96ef4e7f1912035"
        })
      }).then(res => res.json())
}