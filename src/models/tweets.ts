// interface Itweets{
//     content: string;
// }
export class Tweet {
    /**
     *
     */
    content: string;
    constructor(_content: string) {

        this.content =_content;
    }
}


export  const tweets: Array<Tweet>=[
    {content: 'It is so nice outside!'}
]
