// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [
	// TPP
	{
		name: "Random Battle",
		section: "TPP",

		team: 'random',
		mod: "tpprandom",
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "anarchy",
		section: "TPP",

		team: 'random',
		mod: "tppanarchy",
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Gym Challenge",
		section: "TPP",

		searchShow: false,
		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview'],
		banlist: []
	},
	{
		name: "Gym Challenge Doubles",
		section: "TPP",

		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void']
	},
	{ 
		name: "Gym Challenge Triples",
		section: "TPP",

		searchShow: false,
		gameType: 'triples',
		ruleset: ['Pokemon', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Perish Song']
	},
	{
		name: "TPPLA",
		section: "TPP",

		searchShow: false,
		maxLevel: 1000,
		defaultLevel: 100,
		ruleset: ['Team Preview', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "TPPLA Doubles",
		section: "TPP",

		gameType: 'doubles',
		searchShow: false,
		maxLevel: 1000,
		defaultLevel: 100,
		ruleset: ['Team Preview', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "TPPLA Triples",
		section: "TPP",

		gameType: 'triples',
		searchShow: false,
		maxLevel: 1000,
		defaultLevel: 100,
		ruleset: ['Team Preview', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "TPP Battle",
		section: "TPP",

		mod: "tppbattle",
		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview', 'TPP Clause', 'Cancel Mod']
	},

	// ORAS (hidden)
	{
		name: "Anything Goes",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3523229/\">Anything Goes</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548945/\">Anything Goes Resources</a>"
		],
		section: "ORAS",

		ruleset: ['Pokemon', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal']
	},
	{
		name: "OU",
		section: "ORAS",
		column: 2,

		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause', 'Cancel Mod'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite']
	},
	{
		name: "Inverse",
		section: "ORAS",

		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview', 'Cancel Mod'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Snorlax',
			'Xerneas', 'Yveltal', 'Zekrom', 'Gengarite', 'Kangaskhanite', 'Salamencite', 'Soul Dew'
		],
		onModifyPokemon: function (pokemon) {
			pokemon.negateImmunity['Type'] = true;
		},
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		}
	},
	{
		name: "Custom",
		section: "ORAS",

		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "ORAS",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Triples Custom Game",
		section: "ORAS",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod']
	},
	
	// STPPLB
	{
		name: "Super TPPL Bros.",
		section: "STPPLB",
		column: 2,
		
		mod: 'stpplb',
		searchShow: true,
		team: 'randomtpplb',
		ruleset: ['Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onUpdate: function(pokemon) { // called whenever a pokemon changes
			var name = toId(pokemon.name);
			if (pokemon.template.isMega) { // some foolery to give megas their proper ability
				if (name == 'darkfiregamer' && pokemon.getAbility().id === 'solarpower')
					pokemon.setAbility('darkaura');
			}
		},
		onSwitchInPriority: 1,
		onSwitchIn: function(pokemon) {
			var name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			var oldAbility = pokemon.ability;
			if (pokemon.template.isMega) { // more hackery for mega abilities.
				if (name == 'darkfiregamer' && pokemon.getAbility().id === 'solarpower')
					pokemon.setAbility('darkaura');
			} else {
				pokemon.canMegaEvo = this.canMegaEvo(pokemon); // Bypass one mega limit.
			}
			if (name === 'somasghost' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Normal/Ghost');
				pokemon.typesData = [
					{type: 'Normal', suppressed: false,  isAdded: false},
					{type: 'Ghost', suppressed: false,  isAdded: false}
				];
			}
			if (name === 'xfix') { // different message depending on hazards.
				var hazards = {stealthrock: 1, spikes: 1, toxicspikes: 1, stickyweb: 1};
				var hasHazards = false;
				for (var hazard in hazards) {
					if (pokemon.side.getSideCondition(hazard)) {
						hasHazards = true;
						break;
					}
				}
				if (hasHazards) {
					this.add('c|xfix|(no haz... too late)');
				} else {
					this.add('c|xfix|(no hazards, attacks only, final destination)');
				}
			}
			else if (name === 'azum4roll') this.add("c|azum4roll|What? I'm just a normal Azumarill.");
			else if (name === 'lasszeowx') this.add("c|Lass zeowx|Oh, a new challenger?");
			else if (name === 'kapnkooma') this.add("c|Kap'n Kooma|Hoist the black flag lads!");
			else if (name === 'kooma9') this.add("c|Kooma9|ello");
			else if (name === 'best') this.add("raw|<big>GO AWAY</big>");
			else this.add('c|' + (pokemon.illusion ? pokemon.illusion.name : pokemon.name) + '|PLACEHOLDER MESSAGE PLEASE CONTACT TIESOUL');
		},
		
		onFaint: function(pokemon) { // PJSalt-y faint messages go here.
			var name = toId(pokemon.name);
			if (name === 'xfix') {
				var foe = pokemon.side.foe.active[0];
				if (foe.name === 'xfix') {
					this.add('c|xfix|(annoying Dittos...)');
				} else if (foe.ability === 'magicbounce') {
					this.add('c|xfix|(why ' + foe.name + ' has Magic Bounce...)');
					this.add('c|xfix|(gg... why...)');
				} else {
					this.add('c|xfix|(gg... I guess)');
				}
			} else if (name === 'azum4roll') {
				this.add("c|azum4roll|This game doesn't have enough glitches!");
			} else if (name === 'lasszeowx') this.add("c|Lass zeowx|When can I beat TPPLA BibleThump");
			else if (name === 'kapnkooma') this.add("c|Kap'n Kooma|Avast! I be needing a pint of grog after this.");
			else if (name === 'kooma9') this.add("c|Kooma9|Most Disappointing Player 2015");
			else if (name === 'best') this.add("raw|<big>BEST? FALLED</big>");
		},
	},
	
	{
		name: 'Super Glitch',
		section: 'STPPLB',
		column: 2,
		searchShow: true,
		mod: 'superglitch',
		ruleset: ['Metronome Clause', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'No Switching Clause', 'No Recycle Clause'],
		banlist: ['Unreleased'],
		
		maxLevel: 100,
		defaultLevel: 100,
		
		onModifyMove: function(move, pokemon) {
			if (move.id == 'metronome') {
				if (pokemon.moveset[3] && pokemon.moveset[3].pp) {
					pokemon.moveset[3].pp = Math.round(pokemon.moveset[3].pp * 10 + 6) / 10;
				}
				move.name = '(Super Glitch)';
				move.multihit = [2, 5];
				move.onTryHit = function (target, source) {
					if (!source.isActive) return null;
					if (this.random(777) !== 42) return;
					var opponent = pokemon.side.foe.active[0];
					opponent.setStatus('brn');
					var possibleStatuses = ['confusion', 'flinch', 'attract', 'focusenergy', 'foresight', 'healblock'];
					for (var i = 0; i < possibleStatuses.length; i++) {
						if (this.random(3) === 1) {
							opponent.addVolatile(possibleStatuses[i]);
						}
					}

					function generateNoise() {
						var noise = '';
						var random = this.random(40, 81);
						for (var i = 0; i < random; i++) {
							if (this.random(4) !== 0) {
								// Non-breaking space
								noise += '\u00A0';
							} else {
								noise += String.fromCharCode(this.random(0xA0, 0x3040));
							}
						}
						return noise;
					}
					this.add('-message', "(Enemy " + generateNoise.call(this) + " TMTRAINER " + opponent.name + " is frozen solid?)");
					this.add('-message', "(Enemy " + generateNoise.call(this) + " TMTRAINER " + opponent.name + " is hurt by its burn!)");
					this.damage(opponent.maxhp * this.random(42, 96) * 0.01, opponent, opponent);
					var exclamation = source.status === 'brn' ? '!' : '?';
					this.add('-message', "(Enemy " + generateNoise.call(this) + " TMTRAINER " + pokemon.name + " is hurt by its burn" + exclamation + ")");
					this.damage(source.maxhp * this.random(24, 48) * 0.01, source, source);
					return null;
				};
			}
		}
	},

	// Past Generation (hidden)
	{
		name: "[Gen 5] Custom",
		section: "Past Generations",
		column: 2,

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},
	{
		name: "[Gen 5] Doubles Custom",
		section: 'Past Generations',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod']
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	}
];
var stpplb;
var stpplbi;
for (var i = 0; i < exports.Formats.length; i++)
	if (exports.Formats[i].name === 'Super TPPL Bros.') {
		stpplb = exports.Formats[i];
		stpplbi = i;
	}
if (stpplb) {
	exports.Formats.splice(stpplbi+1, 0, {
		name: "Super TPPL Bros. Plus",
		section: "STPPLB",
		column: 2,
		
		mod: 'stpplb',
		searchShow: true,
		team: 'randomtpplbp',
		ruleset: ['Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onUpdate: stpplb.onUpdate,
		onModifyMove: stpplb.onModifyMove,
		onSwitchInPriority: 1,
		onSwitchIn: stpplb.onSwitchIn,
		onFaint: stpplb.onFaint,
		onBegin: stpplb.onBegin
	});
	exports.Formats.splice(stpplbi+2, 0, {
		name: "Super TPP Bros.",
		section: "STPPLB",
		column: 2,
		
		mod: 'stpplb',
		searchShow: true,
		team: 'randomtppb',
		ruleset: ['Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onUpdate: stpplb.onUpdate,
		onModifyMove: stpplb.onModifyMove,
		onSwitchInPriority: 1,
		onSwitchIn: stpplb.onSwitchIn,
		onFaint: stpplb.onFaint,
		onBegin: stpplb.onBegin
	});
}
