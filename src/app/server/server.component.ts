import { Component } from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl:'server.component.html'  
})
export class ServerComponent {
  serverID:Number = 10;
  serverName:String = 'Test';
  serverStatus:String = "Offline";
}