import { ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import { Diagnostic, DiagnosticSeverity, Position } from 'vscode-languageserver';


export default class BeancountLexerErrorListener extends ErrorListener<number> {
	public diagnostic_array: Diagnostic[];

	constructor(){
		super();
		this.diagnostic_array = [];
	}

	public syntaxError(
		recognizer: Recognizer<number>,
		offendingSymbol: number,
		line: number,
		column: number,
		msg: string,
		e: RecognitionException | undefined): void {
			const length = String(offendingSymbol).length;

			const diag: Diagnostic = {
				severity: DiagnosticSeverity.Error,
				range: {
					start: Position.create(line-1, column),
					end: Position.create(line-1, column+length)
				},
				message: msg,
				source: "beancount"
			};

			this.diagnostic_array.push(diag);
	}
}