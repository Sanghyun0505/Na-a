import formidable from 'formidable';
import fs, { createReadStream } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { BlobSASPermissions, BlobServiceClient, StorageSharedKeyCredential, newPipeline } from '@azure/storage-blob';

const accountName = process.env.STORAGE_ACCOUNT_NAME ?? 'icareserviceac'
const accountToken = process.env.STORAGE_ACCOUNT_TOKEN ?? 'ej7HRRsuTUmkunKSgN62AzH8G4Y+1KfNCT41zLvPPw66wdNhuF1mdaZbjW3lGACxwRKjzSaD42Ul+AStEvNTdg=='

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const form = formidable({});
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing form data:', err);
          res.status(500).end('Error uploading file');
          return;
        }

        // Access the uploaded file through files.file
        const file = (files as any).file[0]

        const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountToken);

        // Create a pipeline with your shared key credential
        const pipeline = newPipeline(sharedKeyCredential);
  
        // Create a BlobServiceClient with your SAS token and pipeline
        const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, pipeline);
  
        // Get a reference to the container
        const containerClient = blobServiceClient.getContainerClient('images');
  
        // Create a BlockBlobClient with the file name and container client
        const blockBlobClient = containerClient.getBlockBlobClient(file.originalFilename);
  
        // Read the file as a stream
        const fileStream = createReadStream(file.filepath);
  
        // Upload the file stream to Azure Blob Storage
        const uploadResponse = await blockBlobClient.uploadStream(fileStream)
        console.log('File uploaded successfully:', uploadResponse);

        // Set the public access level of the blob
        const url = await blockBlobClient.generateSasUrl({
          permissions: BlobSASPermissions.parse('r'),
          // expire on 1yea
          expiresOn: new Date(new Date().valueOf() + 365 * 24 * 60 * 60 * 1000),
        });

        res.status(200).json({ success: true, body: url })
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ success: false, error: 'fail to upload to file' })
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
