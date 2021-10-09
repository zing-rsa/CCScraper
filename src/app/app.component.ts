import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CCity Tools';

  public disclaimerSeen;
  public showDisclaimer; 

  ngOnInit(): void {
    if (localStorage.getItem('disclaimerSeen') != 'yes'){
      this.showDisclaimer = true;
    }
  }

  public hide(){
    localStorage.setItem('disclaimerSeen', 'yes');
    this.showDisclaimer = false;
  }

}
