import React from "react";

export class Excel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: props.initialData};
    }

    render() {
        const headers = [];
        for (const title of this.props.headers) {
            headers.push(<th>{title}</th>);
        }
        /*return (
            <table>
                <thead>
                <tr>{headers}</tr>
                </thead>
            </table>
        );*/
        return (
            <table>
                <thead>
                <tr>
                    {this.props.headers.map((title, idx) => (
                        <th key={idx}>{title}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {this.state.data.map((row, idx) => (
                    <tr key={idx}>
                        {row.map((cell, idx) => (
                            <td key={idx}>{cell}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}
