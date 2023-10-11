import { useEffect } from "react"
import { apiService } from "../apiService"

const Reviews = () => {
  useEffect(() => {
    const reviews = apiService.getReviews()
    console.log(reviews)
  }, [])
  return <div>Reviews</div>
}

export default Reviews
