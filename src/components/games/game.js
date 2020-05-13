import React, { Component } from 'react'
import Board from "./board"
import calculateWinner, { calculateDraw } from "../../util"
import { GameAction } from '../../redux/actions'
import { connect } from 'react-redux'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Slide
} from "@material-ui/core";
import '../../css/game.css'
class game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            jumpSquare: { index: null, squares: null },
            isNext: true
        }
    }
    jumpTo(step) {
        this.props.gameHistoryJumpTo(step);
    }
    handleClick(i) {

        const _game = this.props.game
        const squares = _game.history[_game.history.length - 1].squares
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        this.props.gameMove(i)
    }
    render() {
        const _game = this.props.game
        const history = _game.history
        const current = history[_game.stepNumber]
        const [winner, draw] = [calculateWinner(current.squares), calculateDraw(current.squares)]
        let status
        winner ?
            status = 'Winner :' + winner :
            status = draw ? 'Next player : ' + (this.props.xIsNext ? 'X' : 'O') : 'Game match draw'
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start:'
            return (

                <ListItem key={move} onClick={() => this.jumpTo(move)} style={{ padding: 0 }}>
                    <ListItemIcon>
                        <Avatar variant='square'>
                            {move}
                        </Avatar>
                    </ListItemIcon>
                    <ListItemText primary={desc} />
                </ListItem>
            )
        })
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                    <div className="game-history">
                        <b>History index :{this.props.game.jumpSquare.index}</b>
                        {this.props.game.jumpSquare.squares !== null ?
                            <Board
                                squares={this.props.game.jumpSquare.squares}
                                onClick={() => { }}
                            /> : <div />
                        }
                    </div>
                </div>
                <div className="game-info">
                    {status}
                    <Slide in direction='left'>
                        <List >
                            {moves.reverse()}
                        </List>
                    </Slide>
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { game: state.game }
}
export default connect(mapStateToProps, { ...GameAction })(game)