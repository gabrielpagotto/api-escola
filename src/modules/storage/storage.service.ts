import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { serviceAccount } from 'src/config/firebase.config';
import { Readable } from 'stream';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StorageService {
  BUCKET_NAME = process.env.FIREBASE_STORAGE_BUCKET;
  EXPIRES_DATE = '01-01-2200';

  constructor(private db: PrismaService) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(
          serviceAccount as admin.ServiceAccount,
        ),
        storageBucket: this.BUCKET_NAME,
      });
    }
  }

  private createFileStream(buffer: Buffer): Readable {
    const fileStream = new Readable();
    fileStream._read = () => { };
    fileStream.push(buffer);
    fileStream.push(null);
    return fileStream;
  }

  private async uploadFileToStorage(
    file: Express.Multer.File,
    storage: admin.storage.Storage,
  ) {
    const bucket = storage.bucket();
    const fileName = `uploads/${file.originalname}`;
    const fileOptions = {
      destination: fileName,
      metadata: {
        contentType: file.mimetype,
      },
    };

    const fileStream = this.createFileStream(file.buffer);

    await new Promise<void>((resolve, reject) => {
      fileStream
        .pipe(bucket.file(fileName).createWriteStream(fileOptions))
        .on('error', (error) => reject(error))
        .on('finish', async () => resolve());
    });

    const [url] = await bucket.file(fileName).getSignedUrl({
      action: 'read',
      expires: this.EXPIRES_DATE,
    });

    return { url };
  }

  async uploadFileAndGetUrl(file: Express.Multer.File) {
    const storage = admin.storage();
    const data = await this.uploadFileToStorage(file, storage);
    return data.url;
  }
}
