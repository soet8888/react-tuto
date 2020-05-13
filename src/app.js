import React, { Component } from 'react'
import * as Components from './components'
import { GridContainer, GridItem } from './components/Grid'
import { Card, CardHeader } from "./components/Card";
import AppBar from './components/AppBar'
export default class App extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div>
                    <Card style={{ top: "50px" }}>
                        <GridContainer>
                            {Object.keys({ ...Components }).map(key => {
                                return (
                                    <GridItem xs={12} sm={4} md={3}>
                                        <Card style={{ backgroundColor: 'white' }}>
                                            <CardHeader>
                                                <h3 style={{ textAlign: 'center', }}>
                                                    {'Soe Thu Taung'}
                                                </h3>
                                            </CardHeader>
                                            <h3 style={{ textAlign: 'center', color: 'blue' }}>
                                                {key}
                                            </h3>
                                            {React.createElement(Components[key])}
                                        </Card>
                                    </GridItem>)
                            }
                            )}
                        </GridContainer>
                    </Card>
                </div>
            </div>
        )
    }
}
