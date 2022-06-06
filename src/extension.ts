import * as vscode from 'vscode';
var { exec } = require('child_process');

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('run-maindotpy.runMainPy', () => {
		let path = '.';
		if (vscode.workspace.workspaceFolders !== undefined) {
			path = vscode.workspace.workspaceFolders[0].uri.path.substring(1);
		}
		exec(`python ${path}/main.py`, (err: any, stdout: any, stderr: any) => {
			if (err) {
				console.log(err);
			}

			console.log(`stdout: ${stdout}`);
			console.log(`stderr: ${stderr}`);
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
