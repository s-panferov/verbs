/// <reference path='./node_modules/typed-react/typings/react/react.d.ts' />
/// <reference path='./node_modules/typed-react/dist/typed-react.d.ts' />
/// <reference path='./node_modules/bemr/index.d.ts' />

import React = require("react");
import TypedReact = require("typed-react");
import bemr = require("bemr");

require("./app.css");

var DICT = {
    "map": ["Base Form", "Past Simple", "Past Participle", "3rd Person Singular", "Present Participle / Gerund"],
    "fixtures": [
        // ["abide", "abode/abided", "abode/abided/abidden", "abides", "abiding"],
        // ["alight", "alit/alighted", "alit/alighted", "alights", "alighting"],
        // ["arise", "arose", "arisen", "arises", "arising"],
        // ["awake", "awoke", "awoken", "awakes", "awaking"],
        ["be", "was/were", "been", "is", "being"],
        // ["bear", "bore", "born/borne", "bears", "bearing"],
        ["beat", "beat", "beaten", "beats", "beating"],
        ["become", "became", "become", "becomes", "becoming"],
        ["begin", "began", "begun", "begins", "beginning"],
        // ["behold", "beheld", "beheld", "beholds", "beholding"],
        // ["bend", "bent", "bent", "bends", "bending"],
        // ["bet", "bet", "bet", "bets", "betting"],
        // ["bid", "bade", "bidden", "bids", "bidding"],
        // ["bid", "bid", "bid", "bids", "bidding"],
        ["bind", "bound", "bound", "binds", "binding"],
        ["bite", "bit", "bitten", "bites", "biting"],
        // ["bleed", "bled", "bled", "bleeds", "bleeding"],
        // ["blow", "blew", "blown", "blows", "blowing"],
        ["break", "broke", "broken", "breaks", "breaking"],
        // ["breed", "bred", "bred", "breeds", "breeding"],
        ["bring", "brought", "brought", "brings", "bringing"],
        // ["broadcast", "broadcast/broadcasted", "broadcast/broadcasted", "broadcasts", "broadcasting"],
        ["build", "built", "built", "builds", "building"],
        ["burn", "burnt/burned", "burnt/burned", "burns", "burning"],
        // ["burst", "burst", "burst", "bursts", "bursting"],
        // ["bust", "bust", "bust", "busts", "busting"],
        ["buy", "bought", "bought", "buys", "buying"],
        ["cast", "cast", "cast", "casts", "casting"],
        ["catch", "caught", "caught", "catches", "catching"],
        ["choose", "chose", "chosen", "chooses", "choosing"],
        // ["clap", "clapped/clapt", "clapped/clapt", "claps", "clapping"],
        // ["cling", "clung", "clung", "clings", "clinging"],
        // ["clothe", "clad/clothed", "clad/clothed", "clothes", "clothing"],
        ["come", "came", "come", "comes", "coming"],
        ["cost", "cost", "cost", "costs", "costing"],
        // ["creep", "crept", "crept", "creeps", "creeping"],
        ["cut", "cut", "cut", "cuts", "cutting"],
        // ["dare", "dared/durst", "dared", "dares", "daring"],
        // ["deal", "dealt", "dealt", "deals", "dealing"],
        // ["dig", "dug", "dug", "digs", "digging"],
        // ["dive", "dived/dove", "dived", "dives", "diving"],
        ["do", "did", "done", "does", "doing"],
        ["draw", "drew", "drawn", "draws", "drawing"],
        ["dream", "dreamt/dreamed", "dreamt/dreamed", "dreams", "dreaming"],
        ["drink", "drank", "drunk", "drinks", "drinking"],
        ["drive", "drove", "driven", "drives", "driving"],
        // ["dwell", "dwelt", "dwelt", "dwells", "dwelling"],
        ["eat", "ate", "eaten", "eats", "eating"],
        ["fall", "fell", "fallen", "falls", "falling"],
        // ["feed", "fed", "fed", "feeds", "feeding"],
        ["feel", "felt", "felt", "feels", "feeling"],
        ["fight", "fought", "fought", "fights", "fighting"],
        ["find", "found", "found", "finds", "finding"],
        ["fit", "fit/fitted", "fit/fitted", "fits", "fitting"],
        // ["flee", "fled", "fled", "flees", "fleeing"],
        // ["fling", "flung", "flung", "flings", "flinging"],
        ["fly", "flew", "flown", "flies", "flying"],
        // ["forbid", "forbade/forbad", "forbidden", "forbids", "forbidding"],
        // ["forecast", "forecast/forecasted", "forecast/forecasted", "forecasts", "forecasting"],
        // ["foresee", "foresaw", "foreseen", "foresees", "foreseeing"],
        // ["foretell", "foretold", "foretold", "foretells", "foretelling"],
        ["forget", "forgot", "forgotten", "forgets", "foregetting"],
        ["forgive", "forgave", "forgiven", "forgives", "forgiving"],
        // ["forsake", "forsook", "forsaken", "forsakes", "forsaking"],
        ["freeze", "froze", "frozen", "freezes", "freezing"],
        // ["frostbite", "frostbit", "frostbitten", "frostbites", "frostbiting"],
        ["get", "got", "got/gotten", "gets", "getting"],
        ["give", "gave", "given", "gives", "giving"],
        ["go", "went", "gone/been", "goes", "going"],
        // ["grind", "ground", "ground", "grinds", "grinding"],
        ["grow", "grew", "grown", "grows", "growing"],
        // ["handwrite", "handwrote", "handwritten", "handwrites", "handwriting"],
        ["hang", "hung/hanged", "hung/hanged", "hangs", "hanging"],
        ["have", "had", "had", "has", "having"],
        ["hear", "heard", "heard", "hears", "hearing"],
        ["hide", "hid", "hidden", "hides", "hiding"],
        ["hit", "hit", "hit", "hits", "hitting"],
        ["hold", "held", "held", "holds", "holding"],
        ["hurt", "hurt", "hurt", "hurts", "hurting"],
        // ["inlay", "inlaid", "inlaid", "inlays", "inlaying"],
        // ["input", "input/inputted", "input/inputted", "inputs", "inputting"],
        // ["interlay", "interlaid", "interlaid", "interlays", "interlaying"],
        ["keep", "kept", "kept", "keeps", "keeping"],
        // ["kneel", "knelt/kneeled", "knelt/kneeled", "kneels", "kneeling"],
        // ["knit", "knit/knitted", "knit/knitted", "knits", "knitting"],
        ["know", "knew", "known", "knows", "knowing"],
        ["lay", "laid", "laid", "lays", "laying"],
        ["lead", "led", "led", "leads", "leading"],
        // ["lean", "leant/leaned", "leant/leaned", "leans", "leaning"],
        // ["leap", "leapt/leaped", "leapt/leaped", "leaps", "leaping"],
        ["learn", "learnt/learned", "learnt/learned", "learns", "learning"],
        ["leave", "left", "left", "leaves", "leaving"],
        ["lend", "lent", "lent", "lends", "lending"],
        ["let", "let", "let", "lets", "letting"],
        ["lie", "lay", "lain", "lies", "lying"],
        ["light", "lit", "lit", "lights", "lighting"],
        ["lose", "lost", "lost", "loses", "losing"],
        ["make", "made", "made", "makes", "making"],
        ["mean", "meant", "meant", "means", "meaning"],
        ["meet", "met", "met", "meets", "meeting"],
        // ["melt", "melted", "molten/melted", "melts", "melting"],
        // ["mislead", "misled", "misled", "misleads", "misleading"],
        ["mistake", "mistook", "mistaken", "mistakes", "mistaking"],
        ["misunderstand", "misunderstood", "misunderstood", "misunderstands", "misunderstanding"],
        // ["miswed", "miswed/miswedded", "miswed/miswedded", "misweds", "miswedding"],
        // ["mow", "mowed", "mown", "mows", "mowing"],
        // ["overdraw", "overdrew", "overdrawn", "overdraws", "overdrawing"],
        // ["overhear", "overheard", "overheard", "overhears", "overhearing"],
        // ["overtake", "overtook", "overtaken", "overtakes", "overtaking"],
        ["pay", "paid", "paid", "pays", "paying"],
        // ["preset", "preset", "preset", "presets", "presetting"],
        ["prove", "proved", "proven/proved", "proves", "proving"],
        ["put", "put", "put", "puts", "putting"],
        ["quit", "quit", "quit", "quits", "quitting"],
        // ["re-prove", "re-proved", "re-proven/re-proved", "re-proves", "re-proving"],
        ["read", "read", "read", "reads", "reading"],
        // ["rid", "rid/ridded", "rid/ridded", "rids", "ridding"],
        ["ride", "rode", "ridden", "rides", "riding"],
        ["ring", "rang", "rung", "rings", "ringing"],
        ["rise", "rose", "risen", "rises", "rising"],
        // ["rive", "rived", "riven/rived", "rives", "riving"],
        ["run", "ran", "run", "runs", "running"],
        // ["saw", "sawed", "sawn/sawed", "saws", "sawing"],
        ["say", "said", "said", "says", "saying"],
        ["see", "saw", "seen", "sees", "seeing"],
        // ["seek", "sought", "sought", "seeks", "seeking"],
        ["sell", "sold", "sold", "sells", "selling"],
        ["send", "sent", "sent", "sends", "sending"],
        ["set", "set", "set", "sets", "setting"],
        // ["sew", "sewed", "sewn/sewed", "sews", "sewing"],
        ["shake", "shook", "shaken", "shakes", "shaking"],
        // ["shave", "shaved", "shaven/shaved", "shaves", "shaving"],
        // ["shear", "shore/sheared", "shorn/sheared", "shears", "shearing"],
        // ["shed", "shed", "shed", "sheds", "shedding"],
        ["shine", "shone", "shone", "shines", "shining"],
        // ["shoe", "shod", "shod", "shoes", "shoeing"],
        ["shoot", "shot", "shot", "shoots", "shooting"],
        ["show", "showed", "shown", "shows", "showing"],
        // ["shrink", "shrank", "shrunk", "shrinks", "shrinking"],
        ["shut", "shut", "shut", "shuts", "shutting"],
        ["sing", "sang", "sung", "sings", "singing"],
        // ["sink", "sank", "sunk", "sinks", "sinking"],
        ["sit", "sat", "sat", "sits", "sitting"],
        // ["slay", "slew", "slain", "slays", "slaying"],
        ["sleep", "slept", "slept", "sleeps", "sleeping"],
        // ["slide", "slid", "slid/slidden", "slides", "sliding"],
        // ["sling", "slung", "slung", "slings", "slinging"],
        // ["slink", "slunk", "slunk", "slinks", "slinking"],
        // ["slit", "slit", "slit", "slits", "slitting"],
        ["smell", "smelt/smelled", "smelt/smelled", "smells", "smelling"],
        // ["sneak", "sneaked/snuck", "sneaked/snuck", "sneaks", "sneaking"],
        // ["soothsay", "soothsaid", "soothsaid", "soothsays", "soothsaying"],
        // ["sow", "sowed", "sown", "sows", "sowing"],
        ["speak", "spoke", "spoken", "speaks", "speaking"],
        // ["speed", "sped/speeded", "sped/speeded", "speeds", "speeding"],
        ["spell", "spelt/spelled", "spelt/spelled", "spells", "spelling"],
        ["spend", "spent", "spent", "spends", "spending"],
        // ["spill", "spilt/spilled", "spilt/spilled", "spills", "spilling"],
        // ["spin", "span/spun", "spun", "spins", "spinning"],
        // ["spit", "spat/spit", "spat/spit", "spits", "spitting"],
        // ["split", "split", "split", "splits", "splitting"],
        // ["spoil", "spoilt/spoiled", "spoilt/spoiled", "spoils", "spoiling"],
        // ["spread", "spread", "spread", "spreads", "spreading"],
        // ["spring", "sprang", "sprung", "springs", "springing"],
        ["stand", "stood", "stood", "stands", "standing"],
        ["steal", "stole", "stolen", "steals", "stealing"],
        ["stick", "stuck", "stuck", "sticks", "sticking"],
        // ["sting", "stung", "stung", "stings", "stinging"],
        // ["stink", "stank", "stunk", "stinks", "stinking"],
        // ["stride", "strode/strided", "stridden", "strides", "striding"],
        ["strike", "struck", "struck/stricken", "strikes", "striking"],
        // ["string", "strung", "strung", "strings", "stringing"],
        // ["strip", "stript/stripped", "stript/stripped", "strips", "stripping"],
        // ["strive", "strove", "striven", "strives", "striving"],
        // ["sublet", "sublet", "sublet", "sublets", "subletting"],
        // ["sunburn", "sunburned/sunburnt", "sunburned/sunburnt", "sunburns", "sunburning"],
        ["swear", "swore", "sworn", "swears", "swearing"],
        // ["sweat", "sweat/sweated", "sweat/sweated", "sweats", "sweating"],
        // ["sweep", "swept/sweeped", "swept/sweeped", "sweeps", "sweeping"],
        // ["swell", "swelled", "swollen", "swells", "swelling"],
        ["swim", "swam", "swum", "swims", "swimming"],
        // ["swing", "swung", "swung", "swings", "swinging"],
        ["take", "took", "taken", "takes", "taking"],
        ["teach", "taught", "taught", "teaches", "teaching"],
        // ["tear", "tore", "torn", "tears", "tearing"],
        ["tell", "told", "told", "tells", "telling"],
        ["think", "thought", "thought", "thinks", "thinking"],
        // ["thrive", "throve/thrived", "thriven/thrived", "thrives", "thriving"],
        ["throw", "threw", "thrown", "throws", "throwing"],
        // ["thrust", "thrust", "thrust", "thrusts", "thrusting"],
        // ["tread", "trod", "trodden", "treads", "treading"],
        // ["undergo", "underwent", "undergone", "undergoes", "undergoing"],
        ["understand", "understood", "understood", "understands", "understanding"],
        // ["undertake", "undertook", "undertaken", "undertakes", "undertaking"],
        // ["upset", "upset", "upset", "upsets", "upsetting"],
        // ["vex", "vext/vexed", "vext/vexed", "vexes", "vexing"],
        ["wake", "woke", "woken", "wakes", "waking"],
        ["wear", "wore", "worn", "wears", "wearing"],
        // ["weave", "wove", "woven", "weaves", "weaving"],
        // ["wed", "wed/wedded", "wed/wedded", "weds", "wedding"],
        // ["weep", "wept", "wept", "weeps", "weeping"],
        // ["wend", "wended/went", "wended/went", "wends", "wending"],
        // ["wet", "wet/wetted", "wet/wetted", "wets", "wetting"],
        ["win", "won", "won", "wins", "winning"],
        // ["wind", "wound", "wound", "winds", "winding"],
        // ["withdraw", "withdrew", "withdrawn", "withdraws", "withdrawing"],
        // ["withhold", "withheld", "withheld", "withholds", "withholding"],
        // ["withstand", "withstood", "withstood", "withstands", "withstanding"],
        // ["wring", "wrung", "wrung", "wrings", "wringing"],
        ["write", "wrote", "written", "writes", "writing"],
        // ["zinc", "zinced/zincked", "zinced/zincked", "zincs / zincks", "zincking"]
    ]
};

export interface WordPickerProps {
    words: string[];
    idx: number;

    onChange: (word: string) => void
}

interface WordPickerState {

}

class WordPicker extends TypedReact.Component<WordPickerProps, WordPickerState> {
    render() {
        var block = bemr.block("word-picker");

        var children = this.props.words.map((word, idx) => {
            if (idx == this.props.idx) {
                return React.DOM.input({
                    type: 'text',
                    autoFocus: true, onChange: (e) => this.props.onChange((<any>e.target).value)})
            } else {
                return React.DOM.div({className: block.el("word").toString()}, word)
            }
        });

        return React.DOM.div({className: block.toString()}, children)
    }
}

var WordPickerC = TypedReact.createClass(WordPicker);


export interface ScoreProps {
    value: number;
}

class Score extends TypedReact.Component<ScoreProps, {}> {
    render() {
        var block = bemr.block("score");

        return React.DOM.div({className: block.toString()}, this.props.value)
    }
}

var ScoreC = TypedReact.createClass(Score);

interface LostScreenProps {
    score: number,
}

class LostScreen extends TypedReact.Component<LostScreenProps, {}> {
    render() {
        var block = bemr.block("lost");

        return React.DOM.div({className: block.toString()},
            "WASTED!",
            this.props.score,
            React.DOM.input({
                autoFocus: true,
                value: "reload to restart"
            })
        )
    }
}

var LostScreenC = TypedReact.createClass(LostScreen);

interface AppProps {
    score: number;
    verbs: string[];
    idx: number;
    isLost: boolean;
    onChange: (verb: string) => void
}

class App extends TypedReact.Component<AppProps, {}> {
    render() {
        var block = bemr.block("app");

        return React.DOM.div({className: block.toString()},
            (!this.props.isLost ?
                [
                    React.createElement(WordPickerC, {
                        key: Math.random().toString(),
                        words: this.props.verbs,
                        idx: this.props.idx,
                        onChange: this.props.onChange
                    }),
                    React.createElement(ScoreC, {
                        value: 0
                    })
                ] :
                React.createElement(LostScreenC, {
                    score: this.props.score
                }))
        )
    }
}

var AppC = TypedReact.createClass(App);

var score = 0;
var isLost = false;
var timeoutHandler = null;

function resetTimeout() {
    if (timeoutHandler) {
        clearTimeout(timeoutHandler);
    }
    timeoutHandler = setTimeout(() => {
        isLost = true;
        (<any>window).turn();
    }, 10000);
}

(<any>window).turn = function turn() {
    var verbs = DICT.fixtures[Math.floor(Math.random()*DICT.fixtures.length)].slice(0, 3);
    var idx = Math.floor(3 * Math.random());
    var targetVerb = verbs[idx];

    console.log("Picked", verbs)

    if (!isLost) {
        resetTimeout()
    }

    var game = React.render(
        React.createElement(AppC, {
            verbs: verbs,
            idx: idx,
            score: score,
            isLost: isLost,
            onChange: (verb) => {
                var parts = targetVerb.split("/");
                console.log(verb, parts)

                if (parts.filter(item => item == verb).length) {
                    score += 1;
                    turn();
                }
            }
        }),
        document.body
    );
}
