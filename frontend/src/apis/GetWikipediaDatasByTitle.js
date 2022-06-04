const GetWikipediaDatasByTitle = async (title) => {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${title}`
  );
  return await response.json();
};

export default GetWikipediaDatasByTitle;
