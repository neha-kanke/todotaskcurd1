import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Itodo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent implements OnInit {
  editId!: string;
  iseditbrn: boolean = false;
  // newtodoarr: Array<Itodo> = []
  todoarr: Array<Itodo> = [
    {
      todoName: 'neha',
      todoId: '123',
    },
  ];
  @ViewChild('todoelemnet') todoelemnet!: ElementRef;
  constructor(private _sanbar: MatSnackBar) {}

  ngOnInit(): void {}

  opensnackbar(
    sms: string,
    action: string ="close",
    duration: number = 800,
    hPosition: MatSnackBarHorizontalPosition = 'start',
    vPosition: MatSnackBarVerticalPosition = 'top'
  ) {
    this._sanbar.open(sms, action, {
      duration,
      horizontalPosition: hPosition,
      verticalPosition: vPosition,
    });
  }

  onaddbtn() {
    if (this.todoelemnet.nativeElement.value) {
      let newobj = {
        todoName: this.todoelemnet.nativeElement.value,
        todoId: Date.now().toString(),
      };
      this.todoarr.push(newobj);
      this.opensnackbar(
        `todo item added succesfully with todo name is ${newobj.todoName}`,
       
      );
    }
    this.todoelemnet.nativeElement.value = '';
  }

  oneditbtn(todo: Itodo) {
    this.todoelemnet.nativeElement.value = todo.todoName;
    this.editId = todo.todoId;
    this.iseditbrn = true;
  }

  onupdatebtn() {
    let updateobj = {
      todoName: this.todoelemnet.nativeElement.value,
      todoId: this.editId,
    };
    let findindex = this.todoarr.findIndex(
      (todo) => todo.todoId === updateobj.todoId
    );
    this.todoarr[findindex] = updateobj;
    this.opensnackbar(`update the ${updateobj.todoName} todo list`)
    this.iseditbrn = false;
    this.todoelemnet.nativeElement.value = '';
  }
  ondelete(todo: Itodo) {
    let getindex = this.todoarr.findIndex(
      (todo1) => todo1.todoId === todo.todoId
    );
    console.log(getindex);
    this.todoarr.splice(getindex, 1);
    this.opensnackbar(`Delete the todo list ${todo.todoName} item`)
  }
}
