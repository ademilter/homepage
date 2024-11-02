"use server";

// This function fetches the last photos from the VSCO account
// from: img.vsco.co\\u002Faws-us-west-2\\u002F7c1f18\\u002F112676\\u002F670581a76eac2e1889316041\\u002Fvsco_100824.jpg\
// to: img.vsco.co/7c1f18/112676/670581a76eac2e1889316041/vsco_100824.jpg

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
