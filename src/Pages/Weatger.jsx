import React, { Component } from 'react'
import { gettingWeather } from "../api/fetchWeather";

export default class Weatger extends Component {
    state = {
        temp: 0,
        city: 0,
        country: 0
    }
    componentDidMount() {
        this.updateTitle()
    } 
    async updateTitle() {
        const item = await gettingWeather();
        this.setState({
            temp: item.main.temp,
            city: item.name,
            country: item.sys.country
        })
    }
    render() {
        return (
            <div>
                <p>Местоположение: {this.state.city}, {this.state.country}</p>
                <p>Температура: {this.state.temp}</p>
            </div>
        )
    }
}
