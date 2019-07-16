export class User {
  public friendIds: any[] = [];
  public status: string;
  constructor(
    public username: string,
    public firstName: string,
    public last_name: string,
    public email: string,
    public password: string,
    public id: string,
    public zip: string,
  ) {
  }
}
