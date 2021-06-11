import axios from "axios"
import Cors from "cors"
import type { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `https://api.github.com/users/${req.body.searchUser}`

  await axios
    .get(url, {
      headers:{
        "Authorization": process.env.TOKEN
      }
    })
    .then(data => {
      res.status(201).send(data.data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}