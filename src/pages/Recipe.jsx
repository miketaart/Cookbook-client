import React, { Component } from 'react'

export default class Recipe extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            level: "",
            ingredients: [],
            cuisine: "",
            dishType: "",
            image: "",
            duration: ""
        }
    }

    render() {
        return (
            <div>
                <h1>Create a recipe!</h1>

                <div></div>

            </div>
        )
    }
}
