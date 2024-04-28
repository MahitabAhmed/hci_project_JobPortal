export class Task {
  task_name: string;
  due_date: Date;
  description: string;
  isCompleted: boolean;
  

  constructor(name:string,date:Date,desc:string,isCompleted:boolean){
      this.task_name=name;
      this.due_date = date;
      this.description = desc;
      this.isCompleted = isCompleted;
  }
}
