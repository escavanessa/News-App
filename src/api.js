// const apiKey = 'af562e0016694118ad1679bf9d6655af';
// const baseUrl = ' https://newsapi.org/v2/everything?q=Apple&from=2024-02-09&sortBy=popularity&apiKey='

const baseurl = 'https://newsapi.org/v2/everything?' +
'q=Apple&' +
'from=2024-02-09&' +
'sortBy=popularity&' +
'apiKey=af562e0016694118ad1679bf9d6655af';

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

  console.log(dataPromise)

  
  