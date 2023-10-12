import { useEffect, useState } from "react"
import { apiService } from "../apiService"

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    apiService
      .getUsers()
      .then((result) => {
        setUsers(result.data)
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <div className="overflow-x-scroll">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                User Id
              </th>
              <th scope="col" className="px-6 py-4">
                Date Created
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                First
              </th>
              <th scope="col" className="px-6 py-4">
                Last
              </th>
              <th scope="col" className="px-6 py-4">
                Industry
              </th>
              <th scope="col" className="px-6 py-4">
                Job title
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr
                  key={user.userId}
                  className="border-b dark:border-neutral-500"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {user.userId}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {user.createdAt}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {user.firstName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {user.lastName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {user.industry}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {user.jobTitle}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
