/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';
import { CompletionItemKind } from 'vscode-languageclient';

suite('Should do completion', () => {
	const docUri = getDocUri('completion-closed-accounts.bean');
	test('Has Closed Accounts', async () => {
		await testCompletion(docUri, new vscode.Position(5, 0), {
			items: [
				{label: "Equity:Opening-Balances"}
			]
		});
	});

	const docUri2 = getDocUri('completion-minimal-transaction.beancount');
	test('Minimal Transaction Completion',async () => {
		await testCompletion(docUri2, new vscode.Position(4, 4), {
			items: [
				{label: "Assets:Car"},
				{label: "Equity:Opening-Balances"}
			]
		});
	});
});

async function testCompletion(
	docUri: vscode.Uri,
	position: vscode.Position,
	expectedCompletionList: vscode.CompletionList
) {
	await activate(docUri);

	// Executing the command `vscode.executeCompletionItemProvider` to simulate triggering completion
	const actualCompletionList = (await vscode.commands.executeCommand(
		'vscode.executeCompletionItemProvider',
		docUri,
		position
	)) as vscode.CompletionList;

	assert.equal(actualCompletionList.items.length, expectedCompletionList.items.length);
	expectedCompletionList.items.forEach((expectedItem, i) => {
		const actualItem = actualCompletionList.items[i];
		assert.equal(actualItem.label, expectedItem.label);
	});
}
