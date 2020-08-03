const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {	
	let disposable = vscode.commands.registerCommand('html-template.createHtmlTemplate', function () {
		const htmlContent = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Title</title>
		<meta name="description" content="A description.">
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body>
		
	</body>
</html>`;

		const folderPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

		fs.writeFile(path.join(folderPath, 'index.html'), htmlContent, err => {
			if (err) {
				console.error(err);
				vscode.window.showErrorMessage('Failed to create boilerplate index.html!');
			}
			else {
				vscode.window.showInformationMessage('Created a boilerplate index.html!');
			}
		});
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}