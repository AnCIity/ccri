// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ccri" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('ccri.helloWorld', () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World from ccri!')
  })

  context.subscriptions.push(disposable)

  const panel = vscode.window.createWebviewPanel('helloWorld', 'Hello World', vscode.ViewColumn.One, {
    enableScripts: true
  })

  panel.webview.html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
      New Page
    </body>
    </html>
`
  panel.onDidDispose(
    async () => {
      await vscode.window.showInformationMessage('关闭了 webview')
    },
    null,
    context.subscriptions
  )
}

// this method is called when your extension is deactivated
export function deactivate() {}
