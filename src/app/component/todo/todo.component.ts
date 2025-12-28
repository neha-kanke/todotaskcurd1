import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  editId !: string
  iseditbrn: boolean = false
  // newtodoarr: Array<Itodo> = []
  todoarr: Array<Itodo> = [{
    todoName: "neha",
    todoId: '123'
  }]
  @ViewChild('todoelemnet') todoelemnet !: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  onaddbtn() {
    if(this.todoelemnet.nativeElement.value){
    let newobj = {
      todoName: this.todoelemnet.nativeElement.value,
      todoId: Date.now().toString()

    }
    this.todoarr.push(newobj)
    
    }
this.todoelemnet.nativeElement.value = ""
  }

  oneditbtn(todo: Itodo) {
    this.todoelemnet.nativeElement.value = todo.todoName
    this.editId = todo.todoId
    this.iseditbrn = true
  }

  onupdatebtn() {
    let updateobj = {
      todoName: this.todoelemnet.nativeElement.value,
      todoId: this.editId
    }
    let findindex = this.todoarr.findIndex(todo => todo.todoId === updateobj.todoId)
    this.todoarr[findindex] = updateobj
    this.iseditbrn = false
    this.todoelemnet.nativeElement.value = ""

  }
  ondelete(todo:Itodo) {
   let getindex= this.todoarr.findIndex(todo1=>todo1.todoId===todo.todoId)
   console.log(getindex);
    this.todoarr.splice(getindex,1)
  }
}
