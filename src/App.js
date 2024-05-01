import React from "react"
import Header from "./componets/Header"
import Users from "./componets/Users"
import AddUser from './componets/AddUser'
import axios from "axios"
import { MdLocalFireDepartment } from "react-icons/md"

const baseUrl = 'https://reqres.in/api/users?page=1'


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
                users:  [
        {
            id: 1,
            firsname: 'Bob',
            lastname: 'Marley',
            bio: 'Probably participates in various redox reactions through of its active center dithiol to a disulfide and catalyzes dithiol-disulfide',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firsname: 'John',
            lastname: 'Doe',
            bio: 'Probably participates in various redox reactions through of its active center dithiol to a disulfide and catalyzes dithiol-disulfide',
            age: 2,
            isHappy: false
        }
    ]
      }
      this.AddUser = this.AddUser.bind(this)
      this.deleteUser = this.deleteUser.bind(this)
      this.editUser = this.editUser.bind(this)
    }
  render(){
    return (
        <div>
        <Header title="Список пользователей" />
        <main>
          <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
        </main>
        <aside>
          <AddUser onAdd={this.AddUser} />
        </aside>
        </div>
      )
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    const allUsers = this.state.users
    allUsers[user.id - 1] = user
    this.setState({ users: [] }, () => {
      this.setState({users: [...allUsers]})
    })
  }

  AddUser(user) {
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}]})
  }
}

export default App