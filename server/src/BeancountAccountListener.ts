import BeancountListener from './BeancountListener';
import { Account_closeContext, Account_openContext } from './BeancountParser';


export default class BeancountAccountListener extends BeancountListener {
	public account_names: Array<string>;

	constructor(){
		super();
		this.account_names = Array<string>();
	}

	enterAccount_open = (ctx: Account_openContext) => {
		this.account_names.push( ctx.ACCOUNT_NAME().getText() );
	};

	enterAccount_close = (ctx: Account_closeContext) => {
		this.account_names = this.account_names.filter(value => {
			return value !== ctx.ACCOUNT_NAME().getText();
		});
	};
}