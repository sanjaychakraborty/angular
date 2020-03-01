import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {
  serverID = 10;
  serverName = 'Test';
  serverStatus = 'Offline';

  constructor() {
    //  Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1
   this.serverStatus = Math.random() >  0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
