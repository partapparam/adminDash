import axiosClient from "./axiosClient"
const getResidents = async () => {
  try {
    const response = await axiosClient.get("admin/residents")
    console.log(response)
    if (response.data.message === "error") {
      throw Error("Could not fetch residents")
    }
    return response.data
  } catch (error) {
    console.log(error)
    throw Error("Could not fetch")
  }
}

const getReviews = async () => {
  try {
    const response = await axiosClient.get("admin/reviews")
    console.log(response)
    if (response.data.message === "error") {
      throw Error("Could not fetch reviews")
    }
    return response.data
  } catch (error) {
    console.log(error)
    throw Error("Could not fetch")
  }
}

const getUsers = async () => {
  try {
    const response = await axiosClient.get("admin/users")
    console.log(response)
    if (response.data.message === "error") {
      throw Error("Could not fetch users")
    }
    return response.data
  } catch (error) {
    console.log(error)
    throw Error("Could not fetch")
  }
}

export const apiService = { getResidents, getReviews, getUsers }
