const paginate = (data) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  let newData = Array.from({ length: numberOfPages }, (element, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return newData;
};

export default paginate;
