import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  username='';
  isEmpty=true;

 restUsername(){
  this.username="";
 }

  // This is event binding 
  // onUpdateName(event :Event){
  //   this.username=(<HTMLInputElement>event.target).value
  // }
}
