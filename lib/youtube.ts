import { google } from "googleapis";

export default async function youtubeStats() {
  try {
    const googleAuth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
    });

    const auth = await googleAuth.getClient();

    const youtube = google.youtube({
      auth,
      version: "v3",
    });

    const response = await youtube.channels.list({
      // @ts-ignore
      id: "UC1Z-a8i2Ce4oIEMV-S3iFrg",
      part: "statistics",
    });

    // @ts-ignore
    const channel = response.data.items[0];
    const { subscriberCount, viewCount } = channel.statistics;

    return {
      subscriberCount,
      viewCount,
    };
  } catch (error) {
    return {
      subscriberCount: 0,
      viewCount: 0,
    };
  }
}
