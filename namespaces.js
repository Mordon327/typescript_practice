var Blog;
(function (Blog) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Blog.Post = Post;
})(Blog || (Blog = {}));
var Content;
(function (Content) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seokeywords = post.seokeywords;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seokeywords);
        };
        return Post;
    }());
    Content.Post = Post;
})(Content || (Content = {}));
var contentPost = new Content.Post({
    title: "My great Post",
    body: "some content",
    slug: "asdg",
    seokeywords: "agegae"
});
contentPost.printPost();
//# sourceMappingURL=namespaces.js.map