import React from 'react';
import axios from 'axios';

class  FriendsList extends Component {
    constructor(props)  {
        super(props);
        friends = [
            {  
                name: ' ',
                age: null,
                email: ' ',
            }
    ],
};
}

    componentDidMount() {
        axios
            .get(http://localhost:5000/friends/friends)
            .then(res => this.ListeningStateChangedEvent({ friends: res.data}))
            .catch(err => console.log(err));

    }

    render() { 
        return (  );
    }

 
export default FriendsList;
