var loop    = use('loop');
var Scope   = use('scope');

GLOBAL.Scope_MAX      = 500000;
GLOBAL.Scope_MAX_BIG  = 500000;
GLOBAL.Scope_VEC_MULT = 1; 

Scope({
	Random  : use('random'),
	Render  : use('render'),
	
	Creature: use('creature/hexoid'),
	Genesis : use('genesis'),
	
	go(){
		var me = this;
		
		this.Genesis.start();
		
		loop( 2, {
			animate: () => {
				this.Genesis.animate();
			},
			render : () => {
				this.Genesis.render();
				this.Render .animate();
			},
		});
	},
}).go();
