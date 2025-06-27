const tableSrNumber = (pagination, index) => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  let currentPage =
    ((pagination?.current || pagination.current_page) - 1) *
    (pagination?.pageSize || pagination?.page_size);
  if (!currentPage) currentPage = 0;
  return currentPage + index + 1;
};

export {
    tableSrNumber
}