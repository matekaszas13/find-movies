const parser = new DOMParser();

const getWikipediaContentAsText = async (link) => {
  const response = await fetch(link);
  return await response.json();
};


const GetImdbLinkFromWikipediaPageText = async (link) => {
  const wikipediaText = await getWikipediaContentAsText(link);
  const parsedText = parser.parseFromString(wikipediaText.parse.text, "text/html");
  const imdbLink = parsedText.querySelector('[href^="https://www.imdb.com/"]');
  return imdbLink;
}

export default GetImdbLinkFromWikipediaPageText;
