import { Component } from '@angular/core'

@Component({
	selector: 'login',
       	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent{
	public defaultEmail:string = 'manapoker2@gmail.com'
	public defaultPass:string = 'Aguamineral123'
	public defaultPlayerName:string = 'Void'
	public defaultUniverse:string = 'Leda'
}
