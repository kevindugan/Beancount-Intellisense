import { ErrorListener, Recognizer, RecognitionException, Token } from "antlr4";
import { Diagnostic, DiagnosticSeverity, Position } from 'vscode-languageserver/node';

export default class BeancountErrorListener extends ErrorListener<Token> {
	public diagnostic_array: Diagnostic[];

	constructor(){
		super();
		this.diagnostic_array = [];
	}

	public syntaxError<T extends Token>(
		recognizer: Recognizer<T>,
		offendingSymbol: T,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined): void {
			// console.error(`Found error => Line: ${line}:${charPositionInLine}, ${offendingSymbol}`);

			const length = offendingSymbol.stop - offendingSymbol.start + 1;

			const diag: Diagnostic = {
				severity: DiagnosticSeverity.Error,
				range: {
					start: Position.create(line-1, charPositionInLine),
					end: Position.create(line-1, charPositionInLine+length)
				},
				message: msg,
				source: "beancount"
			};

			this.diagnostic_array.push(diag);
		}

	private toRange(sLine: number, sChar: number, eLine: number, eChar: number) {

	}
}