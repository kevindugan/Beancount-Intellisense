// Generated from Beancount.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import BeancountListener from "./BeancountListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class BeancountParser extends Parser {
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
	public static readonly RULE_ledger = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_option = 2;
	public static readonly RULE_include = 3;
	public static readonly RULE_account_open = 4;
	public static readonly RULE_account_close = 5;
	public static readonly RULE_transaction = 6;
	public static readonly RULE_account_update = 7;
	public static readonly RULE_price = 8;
	public static readonly RULE_value = 9;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"ledger", "stat", "option", "include", "account_open", "account_close", 
		"transaction", "account_update", "price", "value",
	];
	public get grammarFileName(): string { return "Beancount.g4"; }
	public get literalNames(): (string | null)[] { return BeancountParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return BeancountParser.symbolicNames; }
	public get ruleNames(): string[] { return BeancountParser.ruleNames; }
	public get serializedATN(): number[] { return BeancountParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, BeancountParser._ATN, BeancountParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public ledger(): LedgerContext {
		let localctx: LedgerContext = new LedgerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, BeancountParser.RULE_ledger);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1290) !== 0)) {
				{
				{
				this.state = 20;
				this.stat();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let localctx: StatContext = new StatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, BeancountParser.RULE_stat);
		try {
			this.state = 32;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 26;
				this.option();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 27;
				this.include();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 28;
				this.account_open();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 29;
				this.account_close();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 30;
				this.transaction();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 31;
				this.match(BeancountParser.NL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public option(): OptionContext {
		let localctx: OptionContext = new OptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, BeancountParser.RULE_option);
		let _la: number;
		try {
			this.state = 44;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 34;
				this.match(BeancountParser.T__0);
				this.state = 35;
				this.match(BeancountParser.STRING);
				this.state = 36;
				this.match(BeancountParser.STRING);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 37;
				this.match(BeancountParser.DATE);
				this.state = 38;
				this.match(BeancountParser.T__1);
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 39;
					this.match(BeancountParser.STRING);
					}
					}
					this.state = 42;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public include(): IncludeContext {
		let localctx: IncludeContext = new IncludeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, BeancountParser.RULE_include);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 46;
			this.match(BeancountParser.T__2);
			this.state = 47;
			this.match(BeancountParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public account_open(): Account_openContext {
		let localctx: Account_openContext = new Account_openContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, BeancountParser.RULE_account_open);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.match(BeancountParser.DATE);
			this.state = 50;
			this.match(BeancountParser.T__3);
			this.state = 51;
			this.match(BeancountParser.ACCOUNT_NAME);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 52;
				this.match(BeancountParser.CURRENCY);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public account_close(): Account_closeContext {
		let localctx: Account_closeContext = new Account_closeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, BeancountParser.RULE_account_close);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.match(BeancountParser.DATE);
			this.state = 56;
			this.match(BeancountParser.T__4);
			this.state = 57;
			this.match(BeancountParser.ACCOUNT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transaction(): TransactionContext {
		let localctx: TransactionContext = new TransactionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, BeancountParser.RULE_transaction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(BeancountParser.DATE);
			this.state = 60;
			this.match(BeancountParser.STATUS);
			this.state = 61;
			this.match(BeancountParser.STRING);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 62;
				this.match(BeancountParser.STRING);
				}
			}

			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15 || _la===16) {
				{
				{
				this.state = 65;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(BeancountParser.NL);
			this.state = 72;
			this.account_update();
			this.state = 75;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 73;
					this.match(BeancountParser.NL);
					this.state = 74;
					this.account_update();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 77;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public account_update(): Account_updateContext {
		let localctx: Account_updateContext = new Account_updateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, BeancountParser.RULE_account_update);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(BeancountParser.ACCOUNT_NAME);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 80;
				this.value();
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 81;
					this.price();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public price(): PriceContext {
		let localctx: PriceContext = new PriceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, BeancountParser.RULE_price);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.match(BeancountParser.T__5);
			this.state = 87;
			this.value();
			this.state = 88;
			this.match(BeancountParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, BeancountParser.RULE_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			this.match(BeancountParser.FLOAT);
			this.state = 91;
			this.match(BeancountParser.CURRENCY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,18,94,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,5,0,22,8,0,10,0,12,0,25,9,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,33,8,1,1,2,1,
	2,1,2,1,2,1,2,1,2,4,2,41,8,2,11,2,12,2,42,3,2,45,8,2,1,3,1,3,1,3,1,4,1,
	4,1,4,1,4,3,4,54,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,64,8,6,1,6,5,6,
	67,8,6,10,6,12,6,70,9,6,1,6,1,6,1,6,1,6,4,6,76,8,6,11,6,12,6,77,1,7,1,7,
	1,7,3,7,83,8,7,3,7,85,8,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,0,0,10,0,2,4,
	6,8,10,12,14,16,18,0,1,1,0,15,16,97,0,23,1,0,0,0,2,32,1,0,0,0,4,44,1,0,
	0,0,6,46,1,0,0,0,8,49,1,0,0,0,10,55,1,0,0,0,12,59,1,0,0,0,14,79,1,0,0,0,
	16,86,1,0,0,0,18,90,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,
	21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,23,1,0,0,0,26,33,3,4,2,0,27,33,
	3,6,3,0,28,33,3,8,4,0,29,33,3,10,5,0,30,33,3,12,6,0,31,33,5,8,0,0,32,26,
	1,0,0,0,32,27,1,0,0,0,32,28,1,0,0,0,32,29,1,0,0,0,32,30,1,0,0,0,32,31,1,
	0,0,0,33,3,1,0,0,0,34,35,5,1,0,0,35,36,5,9,0,0,36,45,5,9,0,0,37,38,5,10,
	0,0,38,40,5,2,0,0,39,41,5,9,0,0,40,39,1,0,0,0,41,42,1,0,0,0,42,40,1,0,0,
	0,42,43,1,0,0,0,43,45,1,0,0,0,44,34,1,0,0,0,44,37,1,0,0,0,45,5,1,0,0,0,
	46,47,5,3,0,0,47,48,5,9,0,0,48,7,1,0,0,0,49,50,5,10,0,0,50,51,5,4,0,0,51,
	53,5,11,0,0,52,54,5,12,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,9,1,0,0,0,55,
	56,5,10,0,0,56,57,5,5,0,0,57,58,5,11,0,0,58,11,1,0,0,0,59,60,5,10,0,0,60,
	61,5,13,0,0,61,63,5,9,0,0,62,64,5,9,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,
	68,1,0,0,0,65,67,7,0,0,0,66,65,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,
	1,0,0,0,69,71,1,0,0,0,70,68,1,0,0,0,71,72,5,8,0,0,72,75,3,14,7,0,73,74,
	5,8,0,0,74,76,3,14,7,0,75,73,1,0,0,0,76,77,1,0,0,0,77,75,1,0,0,0,77,78,
	1,0,0,0,78,13,1,0,0,0,79,84,5,11,0,0,80,82,3,18,9,0,81,83,3,16,8,0,82,81,
	1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,80,1,0,0,0,84,85,1,0,0,0,85,15,1,
	0,0,0,86,87,5,6,0,0,87,88,3,18,9,0,88,89,5,7,0,0,89,17,1,0,0,0,90,91,5,
	14,0,0,91,92,5,12,0,0,92,19,1,0,0,0,10,23,32,42,44,53,63,68,77,82,84];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BeancountParser.__ATN) {
			BeancountParser.__ATN = new ATNDeserializer().deserialize(BeancountParser._serializedATN);
		}

		return BeancountParser.__ATN;
	}


	static DecisionsToDFA = BeancountParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class LedgerContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stat_list(): StatContext[] {
		return this.getTypedRuleContexts(StatContext) as StatContext[];
	}
	public stat(i: number): StatContext {
		return this.getTypedRuleContext(StatContext, i) as StatContext;
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_ledger;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterLedger) {
	 		listener.enterLedger(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitLedger) {
	 		listener.exitLedger(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public option(): OptionContext {
		return this.getTypedRuleContext(OptionContext, 0) as OptionContext;
	}
	public include(): IncludeContext {
		return this.getTypedRuleContext(IncludeContext, 0) as IncludeContext;
	}
	public account_open(): Account_openContext {
		return this.getTypedRuleContext(Account_openContext, 0) as Account_openContext;
	}
	public account_close(): Account_closeContext {
		return this.getTypedRuleContext(Account_closeContext, 0) as Account_closeContext;
	}
	public transaction(): TransactionContext {
		return this.getTypedRuleContext(TransactionContext, 0) as TransactionContext;
	}
	public NL(): TerminalNode {
		return this.getToken(BeancountParser.NL, 0);
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_stat;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterStat) {
	 		listener.enterStat(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitStat) {
	 		listener.exitStat(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(BeancountParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(BeancountParser.STRING, i);
	}
	public DATE(): TerminalNode {
		return this.getToken(BeancountParser.DATE, 0);
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_option;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterOption) {
	 		listener.enterOption(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitOption) {
	 		listener.exitOption(this);
		}
	}
}


export class IncludeContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(BeancountParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_include;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterInclude) {
	 		listener.enterInclude(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitInclude) {
	 		listener.exitInclude(this);
		}
	}
}


export class Account_openContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DATE(): TerminalNode {
		return this.getToken(BeancountParser.DATE, 0);
	}
	public ACCOUNT_NAME(): TerminalNode {
		return this.getToken(BeancountParser.ACCOUNT_NAME, 0);
	}
	public CURRENCY(): TerminalNode {
		return this.getToken(BeancountParser.CURRENCY, 0);
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_account_open;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterAccount_open) {
	 		listener.enterAccount_open(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitAccount_open) {
	 		listener.exitAccount_open(this);
		}
	}
}


export class Account_closeContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DATE(): TerminalNode {
		return this.getToken(BeancountParser.DATE, 0);
	}
	public ACCOUNT_NAME(): TerminalNode {
		return this.getToken(BeancountParser.ACCOUNT_NAME, 0);
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_account_close;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterAccount_close) {
	 		listener.enterAccount_close(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitAccount_close) {
	 		listener.exitAccount_close(this);
		}
	}
}


export class TransactionContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DATE(): TerminalNode {
		return this.getToken(BeancountParser.DATE, 0);
	}
	public STATUS(): TerminalNode {
		return this.getToken(BeancountParser.STATUS, 0);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(BeancountParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(BeancountParser.STRING, i);
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(BeancountParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(BeancountParser.NL, i);
	}
	public account_update_list(): Account_updateContext[] {
		return this.getTypedRuleContexts(Account_updateContext) as Account_updateContext[];
	}
	public account_update(i: number): Account_updateContext {
		return this.getTypedRuleContext(Account_updateContext, i) as Account_updateContext;
	}
	public TAG_list(): TerminalNode[] {
	    	return this.getTokens(BeancountParser.TAG);
	}
	public TAG(i: number): TerminalNode {
		return this.getToken(BeancountParser.TAG, i);
	}
	public REF_list(): TerminalNode[] {
	    	return this.getTokens(BeancountParser.REF);
	}
	public REF(i: number): TerminalNode {
		return this.getToken(BeancountParser.REF, i);
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_transaction;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterTransaction) {
	 		listener.enterTransaction(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitTransaction) {
	 		listener.exitTransaction(this);
		}
	}
}


export class Account_updateContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACCOUNT_NAME(): TerminalNode {
		return this.getToken(BeancountParser.ACCOUNT_NAME, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public price(): PriceContext {
		return this.getTypedRuleContext(PriceContext, 0) as PriceContext;
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_account_update;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterAccount_update) {
	 		listener.enterAccount_update(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitAccount_update) {
	 		listener.exitAccount_update(this);
		}
	}
}


export class PriceContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_price;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterPrice) {
	 		listener.enterPrice(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitPrice) {
	 		listener.exitPrice(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: BeancountParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT(): TerminalNode {
		return this.getToken(BeancountParser.FLOAT, 0);
	}
	public CURRENCY(): TerminalNode {
		return this.getToken(BeancountParser.CURRENCY, 0);
	}
    public get ruleIndex(): number {
    	return BeancountParser.RULE_value;
	}
	public enterRule(listener: BeancountListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: BeancountListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}
