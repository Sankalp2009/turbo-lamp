/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
export default async function getApi(query) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
    throw error;
  }
}