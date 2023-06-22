import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const form = new formidable.IncomingForm();
  
      form.parse(req, (err, fields, file) => {
          console.log('Successfully worked.........');
          console.log(fields);
      // Do something with the fields but Nextjs 13.4.2 in this fields not worked. Not showing this data in this field.
      });
      
      // return new Response(JSON.stringify({success: "Successful"}))

  } catch (err) {
    console.log(err)
      // return new Response(JSON.stringify({error: "Server Side Error !"}), {
      //     status: 500
      // })
  }
  } else {
    res.status(405).end();
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
