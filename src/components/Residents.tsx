import { useEffect } from "react"
import { apiService } from "../apiService"

const Residents = () => {
  useEffect(() => {
    const residents = apiService.getResidents()
    console.log(residents)
  }, [])
  return <div>Residents</div>
}

export default Residents
