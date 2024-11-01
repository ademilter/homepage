"use server";

export async function lastPhotos(): Promise<string[]> {
  const url = `https://vsco.co/adem/gallery`;

  try {
    const response = await fetch(url);
    let data = await response.text();

    // Convert Unicode escape sequences (like \\u002F) to readable characters
    data = data.replace(/\\u([\dA-F]{4})/gi, (match, grp) =>
      String.fromCharCode(parseInt(grp, 16)),
    );
    // Now use a regular expression to match the URLs
    const urlPattern = /im\.vsco\.co\/\S+\.(jpg|jpeg)/g;
    const urls = data.match(urlPattern);

    const clear_urls = urls?.map((o) =>
      o
        .replace(/im\.vsco\.co/g, "img.vsco.co")
        // Remove "/aws-us-west-2" or any similar segment that starts with "aws-"
        .replace(/\/aws-[\w-]+\//, "/"),
    );

    let unique_urls = [...new Set(clear_urls)];

    return unique_urls as string[];
  } catch (error) {
    return [];
  }
}
