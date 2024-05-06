import React from "react";

class AddContact extends React.Component {
    state = {
        name: "", email: ""
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All Filed are manditory")
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""})
        console.log(this.state, "Value");
    }
    render() {
        return (
            <div>
                <h1>Test</h1>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="ui field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </div>
                    <div className="ui field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;