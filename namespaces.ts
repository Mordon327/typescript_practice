namespace Blog {  
  export interface IPost {
    title: string;
    body: string;
  }

  export class Post {
      title: string;
    body: string;

    constructor(post: IPost) {
      this.title = post.title;
      this.body = post.body;
    }

    printPost() {
      console.log(this.title);
      console.log(this.body);
    }
  }
}

namespace Content {  
  export interface IPost {
    title: string;
    body: string;
    slug: string;
    seokeywords: string;
  }

  export class Post {
    title: string;
    body: string;
    slug: string;
    seokeywords: string;

    constructor(post: IPost) {
      this.title = post.title;
      this.body = post.body;
      this.slug = post.slug;
      this.seokeywords = post.seokeywords;
    }

    printPost() {
      console.log(this.title);
      console.log(this.body);
      console.log(this.slug);
      console.log(this.seokeywords);
    }
  }
}

var contentPost = new Content.Post({
  title: "My great Post",
  body: "some content",
  slug: "asdg",
  seokeywords: "agegae"
});

contentPost.printPost();