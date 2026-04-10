import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

class AwsS3BucketImageUpload {
    constructor() {
        this.s3 = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });
    }

    async uploadFile({ fileBuffer, fileName, contentType }) {
        const key = fileName;

        await this.s3.send(
            new PutObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: key,
                Body: fileBuffer,
                ContentType: contentType,
            })
        );

        return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    }
}

export default AwsS3BucketImageUpload;