import { useEffect, useState } from "react"
import { apiService } from "../apiService"

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    apiService
      .getReviews()
      .then((result) => {
        setReviews(result.data)
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
                Review ID
              </th>
              <th scope="col" className="px-6 py-4">
                Date Created
              </th>
              <th scope="col" className="px-6 py-4">
                Resident Name
              </th>
              <th scope="col" className="px-6 py-4">
                Reviewer Name
              </th>
              <th scope="col" className="px-6 py-4">
                Review
              </th>
              <th scope="col" className="px-6 py-4">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews &&
              reviews.map((review) => (
                <tr
                  key={review.reviewId}
                  className="border-b dark:border-neutral-500"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {review.reviewId}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {review.createdAt}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {review.residentFirstName} {review.residentLastName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {review.reviewerFirstName} {review.reviewerLastName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {review.review}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {review.rating}
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
