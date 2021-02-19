import '../App.css';
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import GolfData from '../data/golf_data.json';
import logo from '../logo.png';

class GolfDataList extends Component {

    render () {
       
        const data = {
            // create columns array with relevant labels and fields - the field names used must match the object properties in the rows array
            columns: [
                {
                    label: 'Position',
                    field: 'position',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Total Score',
                    field: 'totalScore',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Round 1 Score',
                    field: 'round1Score',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Round 2 Score',
                    field: 'round2Score',
                    sort: 'asc',
                    width: 110
                },
                {
                    label: 'Round 3 Score',
                    field: 'round3Score',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Round 4 Score',
                    field: 'round4Score',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Total Strokes',
                    field: 'totalStrokes',
                    sort: 'asc',
                    width: 100
                }
              ],
              // create empty rows array of objects to be populated with an object of player data for each row
              rows: [
                {}
            ]
        };

        // declare arrays to be populated
        const names = [];
        const positions = [];
        const totalScores = [];
        const totalScoresRound1 = [];
        const totalScoresRound2 = [];
        const totalScoresRound3 = [];
        const totalScoresRound4 = [];
        const totalStrokes = [];

        // add arrays to object
        const golfData = {
            positions: [],
            names: [],
            totalScores: [],
            totalScoresRound1: [],
            totalScoresRound2: [],
            totalScoresRound3: [],
            totalScoresRound4: [],
            totalStrokes: []
        };

        // populate arrays with athletes' data
        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            names.push([GolfData.events[0].competitions[0].competitors[i].athlete.displayName].toString());
        }

        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            positions.push([GolfData.events[0].competitions[0].competitors[i].status.position.id].toString());
        }

        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            totalScores.push([GolfData.events[0].competitions[0].competitors[i].score.value].toString());
        }

        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            if(GolfData.events[0].competitions[0].competitors[i].linescores[0] != null){
                totalScoresRound1.push([GolfData.events[0].competitions[0].competitors[i].linescores[0].value].toString());
            } 
        }

        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            if(GolfData.events[0].competitions[0].competitors[i].linescores[1] != null){
                totalScoresRound2.push([GolfData.events[0].competitions[0].competitors[i].linescores[1].value].toString());
            } 
        }

        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            if(GolfData.events[0].competitions[0].competitors[i].linescores[2] != null){
                totalScoresRound3.push([GolfData.events[0].competitions[0].competitors[i].linescores[2].value].toString());
            }          
        }

        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            if(GolfData.events[0].competitions[0].competitors[i].linescores[3] != null){
                totalScoresRound4.push([GolfData.events[0].competitions[0].competitors[i].linescores[3].value].toString());
            }  
        }

        // calculate each total stroke and add to totalStrokes array
        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            let firstInScore = 0;
            let secondInScore = 0;
            let thirdInScore = 0;
            let fourthInScore = 0;
            let totalStroke = 0;

            if(GolfData.events[0].competitions[0].competitors[i].linescores[0] != null){
                firstInScore = Number([GolfData.events[0].competitions[0].competitors[i].linescores[0].inScore]);
            }
            else{
                firstInScore = 0;
            }

            if(GolfData.events[0].competitions[0].competitors[i].linescores[1] != null){
                secondInScore = Number([GolfData.events[0].competitions[0].competitors[i].linescores[1].inScore]);
            }
            else{
                secondInScore = 0;
            }

            if(GolfData.events[0].competitions[0].competitors[i].linescores[2] != null){
                thirdInScore = Number([GolfData.events[0].competitions[0].competitors[i].linescores[2].inScore]);
            }
            else{
                thirdInScore = 0;
            }

            if(GolfData.events[0].competitions[0].competitors[i].linescores[3] != null){
                fourthInScore = Number([GolfData.events[0].competitions[0].competitors[i].linescores[3].inScore]);
            }
            else{
                fourthInScore = 0;
            }

            totalStroke = firstInScore + secondInScore + thirdInScore + fourthInScore;
            totalStrokes.push(totalStroke);
        }

        // populate row array with object for each line in the table
        for(var i = 0; i < GolfData.events[0].competitions[0].competitors.length; i++){
            data.rows.push(
                {
                    position: data.rows[i].position = parseInt(GolfData.events[0].competitions[0].competitors[i].status.position.id),
                    name: data.rows[i].name = GolfData.events[0].competitions[0].competitors[i].athlete.displayName.toString(),
                    totalScore: data.rows[i].totalScore = parseInt(GolfData.events[0].competitions[0].competitors[i].score.value),
                    round1Score: data.rows[i].round1Score = parseInt(totalScoresRound1[i]),
                    round2Score: data.rows[i].round2Score = parseInt(totalScoresRound2[i]),
                    round3Score: data.rows[i].round3Score = totalScoresRound3[i],
                    round4Score: data.rows[i].round4Score = totalScoresRound4[i],
                    totalStrokes: data.rows[i].totalStrokes = parseInt(totalStrokes[i])
                },
            )
        }

        return (
            <div>
                <table class="table table-sm">
                    <tbody>
                        <tr>
                            {GolfData.events.map((golfDetail, index)=>{
                                return <th><img src={logo} alt="golf ball" width="20" height="20"></img> {golfDetail.name} {golfDetail.season.year}</th>
                            })}
                        </tr>
                    </tbody>
                </table>
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                    paging={false}
                    order={['position', 'desc']}
                    responsive
                />
            </div>
        )
    }
}

export default GolfDataList;
