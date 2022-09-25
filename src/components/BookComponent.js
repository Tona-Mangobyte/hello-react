import React from "react";
import {Excel} from "./Excel";

export class BookComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: ['Book', 'Author', 'Language', 'Published', 'Sales'],
            data: [
                [
                    'A Tale of Two Cities', 'Charles Dickens',
                    'English', '1859', '200 million',
                ],
                [
                    'Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupéry',
                    'French', '1943', '150 million',
                ],
                [
                    "Harry Potter and the Philosopher's Stone", 'J. K. Rowling',
                    'English', '1997', '120 million',
                ],
                [
                    'And Then There Were None', 'Agatha Christie',
                    'English', '1939', '100 million',
                ],
                [
                    'Dream of the Red Chamber', 'Cao Xueqin',
                    'Chinese', '1791', '100 million',
                ],
                [
                    'The Hobbit', 'J. R. R. Tolkien',
                    'English', '1937', '100 million',
                ],
            ]
        }
    }

    render() {
        return (
            <div>
                <Excel headers={this.state.headers} initialData={this.state.data} />
            </div>
        );
    }
}
