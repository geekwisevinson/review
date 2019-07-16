export class Message {
  public isRead: boolean = false;
  constructor(
    public authorId: string,
    public body: string,
    public toId: string,
    public date: Date,
  ) {}
}
