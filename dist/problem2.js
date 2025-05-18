"use strict";
{
    function filterByRating(items) {
        const booksWithRatings4 = items.filter((item) => (item === null || item === void 0 ? void 0 : item.rating) >= 4);
        return booksWithRatings4;
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
    ];
    console.log(filterByRating(books)); // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
}
