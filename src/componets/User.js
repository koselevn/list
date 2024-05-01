import React from "react"
import AddUser from "./AddUser";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false
    }
  }
    user = this.props.user
  render() {
    return (
        <div className="user" >
            <MdDelete className='delete-icon' onClick={() => this.props.onDelete(this.user.id)}/>
        <FaEdit className="edit-icon" onClick={() => {
          this.setState({
            editForm: !this.state.editForm
          })
        }}/>
        <h3>{this.user.firsname} {this.user.lastname}</h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? 'Счаслив :)' : "Не особо :("}</b>
        
        {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
        </div>
    )
  }
}

export default User