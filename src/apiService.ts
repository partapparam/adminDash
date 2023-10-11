import axiosClient from "./axiosClient"
const getResidents = async () => {
  try {
    const response = await axiosClient.get("admin/residents")
    if (response.data.message === "success") {
      return response.data.data
    }
    throw Error("Could not fetch residents")
  } catch (error) {
    console.log(error)
    throw Error("Could not fetch")
  }
}

const getReviews = async () => {
  try {
    const response = await axiosClient.get("admin/reviews")
    if (response.data.message === "success") {
      return response.data.data
    }
    throw Error("Could not fetch reviews")
  } catch (error) {
    console.log(error)
    throw Error("Could not fetch")
  }
}

const getUsers = async () => {
  try {
    const response = await axiosClient.get("admin/users")
    if (response.data.message === "success") {
      console.log("loggin success", response.data.data)
      return response.data.data
    }
    throw Error("Could not fetch users")
  } catch (error) {
    console.log(error)
    throw Error("Could not fetch")
  }
}

export const apiService = { getResidents, getReviews, getUsers }
