// Generated from Beancount.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { LedgerContext } from "./BeancountParser";
import { StatContext } from "./BeancountParser";
import { OptionContext } from "./BeancountParser";
import { IncludeContext } from "./BeancountParser";
import { Account_openContext } from "./BeancountParser";
import { Account_closeContext } from "./BeancountParser";
import { TransactionContext } from "./BeancountParser";
import { Account_updateContext } from "./BeancountParser";
import { PriceContext } from "./BeancountParser";
import { ValueContext } from "./BeancountParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BeancountParser`.
 */
export default class BeancountListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BeancountParser.ledger`.
	 * @param ctx the parse tree
	 */
	enterLedger?: (ctx: LedgerContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.ledger`.
	 * @param ctx the parse tree
	 */
	exitLedger?: (ctx: LedgerContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.include`.
	 * @param ctx the parse tree
	 */
	enterInclude?: (ctx: IncludeContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.include`.
	 * @param ctx the parse tree
	 */
	exitInclude?: (ctx: IncludeContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.account_open`.
	 * @param ctx the parse tree
	 */
	enterAccount_open?: (ctx: Account_openContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.account_open`.
	 * @param ctx the parse tree
	 */
	exitAccount_open?: (ctx: Account_openContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.account_close`.
	 * @param ctx the parse tree
	 */
	enterAccount_close?: (ctx: Account_closeContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.account_close`.
	 * @param ctx the parse tree
	 */
	exitAccount_close?: (ctx: Account_closeContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.transaction`.
	 * @param ctx the parse tree
	 */
	enterTransaction?: (ctx: TransactionContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.transaction`.
	 * @param ctx the parse tree
	 */
	exitTransaction?: (ctx: TransactionContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.account_update`.
	 * @param ctx the parse tree
	 */
	enterAccount_update?: (ctx: Account_updateContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.account_update`.
	 * @param ctx the parse tree
	 */
	exitAccount_update?: (ctx: Account_updateContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.price`.
	 * @param ctx the parse tree
	 */
	enterPrice?: (ctx: PriceContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.price`.
	 * @param ctx the parse tree
	 */
	exitPrice?: (ctx: PriceContext) => void;
	/**
	 * Enter a parse tree produced by `BeancountParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `BeancountParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

