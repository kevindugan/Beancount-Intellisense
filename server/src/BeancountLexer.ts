// Generated from Beancount.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class BeancountLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly NL = 8;
	public static readonly STRING = 9;
	public static readonly DATE = 10;
	public static readonly ACCOUNT_NAME = 11;
	public static readonly CURRENCY = 12;
	public static readonly STATUS = 13;
	public static readonly FLOAT = 14;
	public static readonly TAG = 15;
	public static readonly REF = 16;
	public static readonly WS = 17;
	public static readonly COMMENT = 18;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'option'", 
                                                            "'custom'", 
                                                            "'include'", 
                                                            "'open'", "'close'", 
                                                            "'{'", "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "NL", "STRING", 
                                                             "DATE", "ACCOUNT_NAME", 
                                                             "CURRENCY", 
                                                             "STATUS", "FLOAT", 
                                                             "TAG", "REF", 
                                                             "WS", "COMMENT" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "NL", "STRING", 
		"DATE", "ACCOUNT_NAME", "CURRENCY", "STATUS", "FLOAT", "TAG", "REF", "WS", 
		"COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, BeancountLexer._ATN, BeancountLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Beancount.g4"; }

	public get literalNames(): (string | null)[] { return BeancountLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return BeancountLexer.symbolicNames; }
	public get ruleNames(): string[] { return BeancountLexer.ruleNames; }

	public get serializedATN(): number[] { return BeancountLexer._serializedATN; }

	public get channelNames(): string[] { return BeancountLexer.channelNames; }

	public get modeNames(): string[] { return BeancountLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,18,199,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
	4,1,5,1,5,1,6,1,6,1,7,3,7,76,8,7,1,7,1,7,1,8,1,8,5,8,82,8,8,10,8,12,8,85,
	9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,3,10,137,8,10,1,10,1,10,4,10,141,8,10,11,10,12,
	10,142,1,11,1,11,1,11,4,11,148,8,11,11,11,12,11,149,1,12,1,12,1,13,3,13,
	155,8,13,1,13,4,13,158,8,13,11,13,12,13,159,1,13,1,13,4,13,164,8,13,11,
	13,12,13,165,3,13,168,8,13,1,14,1,14,4,14,172,8,14,11,14,12,14,173,1,15,
	1,15,4,15,178,8,15,11,15,12,15,179,1,16,4,16,183,8,16,11,16,12,16,184,1,
	16,1,16,1,17,1,17,5,17,191,8,17,10,17,12,17,194,9,17,1,17,1,17,1,17,1,17,
	0,0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
	27,14,29,15,31,16,33,17,35,18,1,0,9,1,0,34,34,1,0,48,57,4,0,45,45,48,58,
	65,90,97,122,1,0,65,90,2,0,33,33,42,42,2,0,44,44,48,57,5,0,45,45,48,57,
	65,90,95,95,97,122,2,0,9,9,32,32,2,0,10,10,13,13,214,0,1,1,0,0,0,0,3,1,
	0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
	1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,
	0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,1,37,
	1,0,0,0,3,44,1,0,0,0,5,51,1,0,0,0,7,59,1,0,0,0,9,64,1,0,0,0,11,70,1,0,0,
	0,13,72,1,0,0,0,15,75,1,0,0,0,17,79,1,0,0,0,19,88,1,0,0,0,21,136,1,0,0,
	0,23,144,1,0,0,0,25,151,1,0,0,0,27,154,1,0,0,0,29,169,1,0,0,0,31,175,1,
	0,0,0,33,182,1,0,0,0,35,188,1,0,0,0,37,38,5,111,0,0,38,39,5,112,0,0,39,
	40,5,116,0,0,40,41,5,105,0,0,41,42,5,111,0,0,42,43,5,110,0,0,43,2,1,0,0,
	0,44,45,5,99,0,0,45,46,5,117,0,0,46,47,5,115,0,0,47,48,5,116,0,0,48,49,
	5,111,0,0,49,50,5,109,0,0,50,4,1,0,0,0,51,52,5,105,0,0,52,53,5,110,0,0,
	53,54,5,99,0,0,54,55,5,108,0,0,55,56,5,117,0,0,56,57,5,100,0,0,57,58,5,
	101,0,0,58,6,1,0,0,0,59,60,5,111,0,0,60,61,5,112,0,0,61,62,5,101,0,0,62,
	63,5,110,0,0,63,8,1,0,0,0,64,65,5,99,0,0,65,66,5,108,0,0,66,67,5,111,0,
	0,67,68,5,115,0,0,68,69,5,101,0,0,69,10,1,0,0,0,70,71,5,123,0,0,71,12,1,
	0,0,0,72,73,5,125,0,0,73,14,1,0,0,0,74,76,5,13,0,0,75,74,1,0,0,0,75,76,
	1,0,0,0,76,77,1,0,0,0,77,78,5,10,0,0,78,16,1,0,0,0,79,83,5,34,0,0,80,82,
	8,0,0,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,
	0,0,0,85,83,1,0,0,0,86,87,5,34,0,0,87,18,1,0,0,0,88,89,7,1,0,0,89,90,7,
	1,0,0,90,91,7,1,0,0,91,92,7,1,0,0,92,93,5,45,0,0,93,94,7,1,0,0,94,95,7,
	1,0,0,95,96,5,45,0,0,96,97,7,1,0,0,97,98,7,1,0,0,98,20,1,0,0,0,99,100,5,
	65,0,0,100,101,5,115,0,0,101,102,5,115,0,0,102,103,5,101,0,0,103,104,5,
	116,0,0,104,137,5,115,0,0,105,106,5,76,0,0,106,107,5,105,0,0,107,108,5,
	97,0,0,108,109,5,98,0,0,109,110,5,105,0,0,110,111,5,108,0,0,111,112,5,105,
	0,0,112,113,5,116,0,0,113,114,5,105,0,0,114,115,5,101,0,0,115,137,5,115,
	0,0,116,117,5,73,0,0,117,118,5,110,0,0,118,119,5,99,0,0,119,120,5,111,0,
	0,120,121,5,109,0,0,121,137,5,101,0,0,122,123,5,69,0,0,123,124,5,120,0,
	0,124,125,5,112,0,0,125,126,5,101,0,0,126,127,5,110,0,0,127,128,5,115,0,
	0,128,129,5,101,0,0,129,137,5,115,0,0,130,131,5,69,0,0,131,132,5,113,0,
	0,132,133,5,117,0,0,133,134,5,105,0,0,134,135,5,116,0,0,135,137,5,121,0,
	0,136,99,1,0,0,0,136,105,1,0,0,0,136,116,1,0,0,0,136,122,1,0,0,0,136,130,
	1,0,0,0,137,138,1,0,0,0,138,140,5,58,0,0,139,141,7,2,0,0,140,139,1,0,0,
	0,141,142,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,22,1,0,0,0,144,145,
	7,3,0,0,145,147,7,3,0,0,146,148,7,3,0,0,147,146,1,0,0,0,148,149,1,0,0,0,
	149,147,1,0,0,0,149,150,1,0,0,0,150,24,1,0,0,0,151,152,7,4,0,0,152,26,1,
	0,0,0,153,155,5,45,0,0,154,153,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,
	156,158,7,5,0,0,157,156,1,0,0,0,158,159,1,0,0,0,159,157,1,0,0,0,159,160,
	1,0,0,0,160,167,1,0,0,0,161,163,9,0,0,0,162,164,7,1,0,0,163,162,1,0,0,0,
	164,165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,161,
	1,0,0,0,167,168,1,0,0,0,168,28,1,0,0,0,169,171,5,94,0,0,170,172,7,6,0,0,
	171,170,1,0,0,0,172,173,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,30,
	1,0,0,0,175,177,5,35,0,0,176,178,7,6,0,0,177,176,1,0,0,0,178,179,1,0,0,
	0,179,177,1,0,0,0,179,180,1,0,0,0,180,32,1,0,0,0,181,183,7,7,0,0,182,181,
	1,0,0,0,183,184,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,
	186,187,6,16,0,0,187,34,1,0,0,0,188,192,5,59,0,0,189,191,8,8,0,0,190,189,
	1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,195,1,0,0,0,
	194,192,1,0,0,0,195,196,3,15,7,0,196,197,1,0,0,0,197,198,6,17,0,0,198,36,
	1,0,0,0,14,0,75,83,136,142,149,154,159,165,167,173,179,184,192,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BeancountLexer.__ATN) {
			BeancountLexer.__ATN = new ATNDeserializer().deserialize(BeancountLexer._serializedATN);
		}

		return BeancountLexer.__ATN;
	}


	static DecisionsToDFA = BeancountLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}