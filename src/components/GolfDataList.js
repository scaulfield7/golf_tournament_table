import '../App.css';
import React, { Component } from 'react';
import GolfData from '../data/golf_data.json';

class GolfDataList extends Component {

    render () {
       
    

        return (
            <div>
                <table class="table table-sm">
                    <tbody>
                        <tr>
                            {GolfData.events.map((golfDetail, index)=>{
                                return <th>{golfDetail.name} {golfDetail.season.year}</th>
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GolfDataList;
