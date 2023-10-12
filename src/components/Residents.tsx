import { useEffect, useState } from "react"
import { apiService } from "../apiService"

const Reviews = () => {
  const [residents, setResidents] = useState([])
  useEffect(() => {
    apiService
      .getResidents()
      .then((result) => {
        setResidents(result.data)
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
                Resident ID
              </th>
              <th scope="col" className="px-6 py-4">
                Date Created
              </th>
              <th scope="col" className="px-6 py-4">
                Resident Name
              </th>
              <th scope="col" className="px-6 py-4">
                Resident Address
              </th>
              <th scope="col" className="px-6 py-4">
                Type
              </th>
              <th scope="col" className="px-6 py-4">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            {residents &&
              residents.map((residents) => (
                <tr
                  key={residents.residentId}
                  className="border-b dark:border-neutral-500"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {residents.residentId}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {residents.createdAt}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {residents.firstName} {residents.lastName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {residents.residentAddress}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {residents.type}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {residents.unit}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Reviews
