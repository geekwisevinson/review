export class Post {
  public likes: number = 0;
  public dislikes: number = 0;
  constructor(
    public author: string,
    public body: string,
    public imgSrc: string,
    public id: string,
  ){}
}
