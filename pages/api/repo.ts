import axios from "axios"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body.username)
  const url = `https://api.github.com/users/${req.body.username}/repos`

  await axios
    .get(url, {
      headers:{
        "Authorization": process.env.TOKEN
      }
    })
    .then(({data}) => {
      res.status(201).send(data)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
}