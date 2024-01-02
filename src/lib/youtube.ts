import { google } from "googleapis";
import { unstable_cache } from "next/cache";

const googleAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
});

const youtube = google.youtube({
  version: "v3",
  auth: googleAuth,
});

export default unstable_cache(
  async () => {
    const response = await youtube.channels.list({
      id: ["UC1Z-a8i2Ce4oIEMV-S3iFrg"],
      part: ["statistics"],
    });

    let channel = response.data.items![0];

    return {
      subscriberCount: Number(channel?.statistics?.subscriberCount),
      viewCount: Number(channel?.statistics?.viewCount),
    };
  },
  ["ademilter-youtube"],
  {
    revalidate: 3600,
  },
);
