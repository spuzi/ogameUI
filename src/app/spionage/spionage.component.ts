import { Component } from '@angular/core'

@Component({
	selector: 'spionage',
	templateUrl: './spionage.component.html',
	styleUrls: ['./spionage.component.css']	
})
export class SpionageComponent{
	public galaxy:number;
	public solarSystem:number;
	public position:number;
	public range:number;
	public coordinates:Array<string>;

	// CONSTRUCTOR 
	constructor(){
		this.galaxy=1;
		this.solarSystem=163;
		this.position=9;
		this.range=30;
		this.coordinates = ['1:37:8', '1:163:9', '1:306:9', '2:105:8', '2:301:8', '3:252:8', '3:101:8', '1:419:8', '1:223:8'];
	}
	
	ngOnInit(){
		console.log(`Inicializando componente de spionage con los siguientes parametros:\n
		Coordinates -> ${this.galaxy}:${this.solarSystem}:${this.position}
		Range -> ${this.range} 
		`)
	}


}
