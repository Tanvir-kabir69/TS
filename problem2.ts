{
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const booksWithRatings4: { title: string; rating: number }[] = items.filter(
      (item: { title: string; rating: number }) => item?.rating >= 4
    );
    return booksWithRatings4;
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  console.log(filterByRating(books)); // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
}
