import React, {Component} from 'react';
import axios from 'axios';

class  FriendsList extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            friends:  [
                {  
                    name: ' ',
                    age: null,
                    email: ' ',
                }
            ]
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/friends/friends")
            .then(res => this.setState({ friends: res.data}))
            .catch(err => console.log(err));
    }   
    
    render() { 
        return (  
            <div>
                {this.state.friends};
            </div>
    
        );
    }
}





 
export default FriendsList;
