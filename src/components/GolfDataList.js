import '../App.css';
import React, { Component } from 'react';
import GolfData from '../data/golf_data.json';
import logo from '../logo.png';

class GolfDataList extends Component {

    render () {
       
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

        return (
            <div>
                <table class="table table-sm">
                    <tbody>
                        <tr>
                            {GolfData.events.map((golfDetail, index)=>{
                                return <th><img src={logo} alt="golf ball" width="25" height="25"></img> {golfDetail.name} {golfDetail.season.year}</th>
                            })}
                        </tr>
                    </tbody>
                </table>
                <div>
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Player</th>
                            <th>Total Score</th>
                            <th>Total Round 1</th>
                            <th>Total Round 2</th>
                            <th>Total Round 3</th>
                            <th>Total Round 4</th>
                            <th>Total Strokes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {positions.map((position, index) => (
                            <tr key={index}>
                                <td>{position}</td>
                                <td>{names[index]}</td>
                                <td>{totalScores[index]}</td>
                                <td>{totalScoresRound1[index]}</td>
                                <td>{totalScoresRound2[index]}</td>
                                <td>{totalScoresRound3[index]}</td>
                                <td>{totalScoresRound4[index]}</td>
                                <td>{totalStrokes[index]}</td>
                            </tr>
                        ))}            
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default GolfDataList;
