import { Component } from '@angular/core'

@Component({
	selector: 'cost-calculator',
	styleUrls: ['cost-calculator.component.css'],
	templateUrl: 'cost-calculator.component.html'
})
export class CostCalculatorComponent{

	// Title shown in the component
	public title:string;
	
	// Total cost
	public metal:number;
	public crystal:number;
	public deuterium:number;

	// Number of ships
	public numSmallCargos:number;
	public numLargeCargos:number;
	public numLightFighter:number;
	public numHeavyFighter:number;
	public numCruiser:number;
	public numBattleship:number;
	public numBattlecruiser:number;
	public numBomber:number;
	public numDestructor:number;
	public numReaper:number;
	public numDeathstar:number;

	
	constructor(){
		this.title = 'Cost Calculator'	
	}

	ngOnInit(){
		console.log("Inicializando calculador de costes ... ")
		this.metal = 0;
		this.crystal = 0;
		this.deuterium = 0;
	}

	calculateTotalCost(){
		console.log("Calculating cost ...")	

		this.metal = 0;
		this.crystal = 0;
		this.deuterium = 0;

		// Small Cargo
		if(this.numSmallCargos != undefined){
			this.metal += this.numSmallCargos * 2000;
			this.crystal += this.numSmallCargos * 2000;
		}

		// Large Cargo
		if(this.numLargeCargos != undefined){
			this.metal += this.numLargeCargos * 6000;
			this.crystal += this.numLargeCargos * 6000;
		}

		// Light Figther
		if(this.numLightFighter != undefined){
			this.metal += this.numLightFighter * 3000;
			this.crystal += this.numLightFighter * 1000;
		}
		
		// Heavy Figther
		if(this.numHeavyFighter != undefined){
			this.metal += this.numHeavyFighter * 6000;
			this.crystal += this.numHeavyFighter * 4000;
		}

		// Cruiser 
		if(this.numCruiser != undefined){
			this.metal += this.numCruiser * 20000;
			this.crystal += this.numCruiser * 7000;
			this.deuterium += this.numCruiser * 2000;
		}
		
		// Battleship 
		if(this.numBattleship != undefined){
			this.metal += this.numBattleship * 45000;
			this.crystal += this.numBattleship * 15000;
		}
	
		// BattleCruiser 
		if(this.numBattlecruiser != undefined){
			this.metal += this.numBattlecruiser * 30000;
			this.crystal += this.numBattlecruiser * 40000;
			this.deuterium += this.numBattlecruiser * 15000;
		}

		// Bomber 
		if(this.numBomber != undefined){
			this.metal += this.numBomber * 50000;
			this.crystal += this.numBomber * 25000;
			this.deuterium += this.numBomber * 15000;
		}
	
		// Destructor 
		if(this.numDestructor != undefined){
			this.metal += this.numDestructor * 60000;
			this.crystal += this.numDestructor * 50000;
			this.deuterium += this.numDestructor * 15000;
		}
		
		// Reaper 
		if(this.numReaper != undefined){
			this.metal += this.numReaper * 85000;
			this.crystal += this.numReaper * 55000;
			this.deuterium += this.numReaper * 20000;
		}
	
		// Deathstar 
		if(this.numDeathstar != undefined){
			this.metal += this.numDeathstar * 5000000;
			this.crystal += this.numDeathstar * 4000000;
			this.deuterium += this.numDeathstar * 1000000;
		}
	}

	clear(){
		this.numSmallCargos = undefined;
		this.numLargeCargos = undefined;
		this.numLightFighter = undefined;
		this.numHeavyFighter = undefined;
		this.numCruiser = undefined;
		this.numBattleship = undefined;
		this.numBattlecruiser = undefined;
		this.numBomber = undefined;
		this.numDestructor = undefined;
		this.numReaper = undefined;
		this.numDeathstar = undefined;

		this.metal = undefined; 
		this.crystal = undefined; 
		this.deuterium = undefined; 


	}


}

