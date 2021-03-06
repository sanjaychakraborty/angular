import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <h3> this is template design pattern</h3>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  creatNewServer: string = null;
  allowNewServer = false;
  newServerName: string = null;
  allowServerCreation = false;
  servers = ['Test Server', 'Dev Server '];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  OnServerCreate(event: Event) {
    this.creatNewServer = (event.target as HTMLInputElement).value;
  }

  OnButtonClick() {
    this.allowServerCreation = false;
    if (this.creatNewServer !== '') {
      this.newServerName = this.creatNewServer;
      this.allowServerCreation = true;
      this.servers.push(this.creatNewServer);
    }
  }
}
