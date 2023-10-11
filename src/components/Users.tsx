import { useEffect } from "react"
import { apiService } from "../apiService"

const Users = () => {
  useEffect(() => {
    const users = apiService.getUsers()
    console.log(users)
  }, [])
  return <div>Users</div>
}

export default Users
