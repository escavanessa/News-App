import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const baseurl = 'https://newsapi.org/v2/everything?q=Apple&from=2024-02-09&sortBy=popularity&apiKey=af562e0016694118ad1679bf9d6655af';

function fetchData() {
    const dataPromise = new Promise((resolve, reject) => {
      try {
        fetch(baseurl)
          .then(response => response.json())
          .then(json => {
            resolve(json)
            console.log(json)
          })
      } catch (error) {
        reject(error)
        console.log(error)
      }
    })
    return dataPromise
  }



const NewsBoard = () => {
    const [data, setData] = useState({})

  useEffect(() => {
    fetchData().then((response) => {
      setData(response)
      console.log(response)
    }).catch(
      (error) => { console.log(error) }
    )

  }, []);




  return (
    <>
    <h1>something</h1>
    </>
  )
}

export default NewsBoard