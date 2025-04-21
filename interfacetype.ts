//intersection type combines multiple types into one. Although intersection and union types in TypeScript are similar, they are used in very different ways. A type that combines different types into one is called an intersection type. This enables you to combine many types to produce a single type with all the necessary attributes. Members from each of the provided types will be present in an object of this type. The intersection type is made using the '&' operator.


interface Book {
    book_id: number
    book_name: string
 }
 interface Author {
    author_id: number
    author_name: string
 }
 type intersected_type = Book & Author
 let intersected_type_object1: intersected_type = {
    book_id: 101,
    book_name: 'Typescript is Awesome',
    author_id: 202,
    author_name: 'Tutorialspoint!',
 }
 console.log('Book Id: ' + intersected_type_object1.book_id)
 console.log('Book name: ' + intersected_type_object1.book_name)
 console.log('Author Id: ' + intersected_type_object1.author_id)
 console.log('Author name: ' + intersected_type_object1.author_n)
// ==> Book Id: 101
//  ==> Book name: Typescript is Awesome
//  ==> Author Id: 202
//  ==> Author name: Tutorialspoint!