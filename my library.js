
const books = [
    {
        title: 'Oliver Twist',
        description: 'A classic novel by Charles Dicken',
        numberOfpages: 448,
        author: 'Charles Dicken',
        reading: true
    },
    {
        title: 'Finishing Strong',
     description: 'A book that encourages men by Steve farrar',
     numberOfpages: 224,
     author: 'Steve Farrar',
     reading: true
    },
    {
        title: 'Women of Owu',
        description: 'A book that tell story of group of women by Buchi Emecheta',
        numberOfpages: 208,
        author: 'Buchi Emecheta',
        reading: false
    },
    {
        title: 'Women of OwuThe Subtle Art of Not Giving a Fcuk',
     description: 'A book that challenges conventional wisdom by Mark Mason',
     numberOfpages: 224,
     author: 'Mark Mason',
     reading: false
    },
    {
        title: 'Gifted Hands',
     description: 'A book about renowned ne,urosurgeon by Ben Carson',
     numberOfpages: 224,
     author: 'Ben Carson',
     reading: false
    },
    {
        title: 'Think Big',
     description: 'A motivational book by Ben Carson',
     numberOfpages: 224,
     author: 'Ben Carson',
     reading: false
    },
    {
        title: 'All the men in lagos are mad',
     description: 'A novel that explores the complexities of relationship by Damilare Kuku',
     numberOfpages: 216,
     author: 'Damilare Kuku',
     reading: false
    }
    ];
    
    for (let i = 0; i < books. length; i++) {
        if (books[i].reading === true){
            console.log('Title: ${books[i]. title}');
            console.log('Author: ${books[i]. author}');
            console.log('Reading Status: ${books[i]. reading}\n');
        }
    }